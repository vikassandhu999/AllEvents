import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import storageApi from '@app/@allevents/http/storage';

enum Status {
  uploading = 'uploading',
  deleting = 'deleting',
  idle = 'idle',
  rejected = 'rejected',
  success = 'success',
}

type ImageUploadState = {
  status: Status;
  imageUrl?: string;
  error: string | undefined;
};

const initialState = {
  status: Status.idle,
  imageUrl: undefined,
  error: undefined,
};

function useImageUpload() {
  const [state, setState] = useState<ImageUploadState>({ ...initialState });
  const imageInputRef = useRef<HTMLInputElement>(null);

  const setError = useCallback(
    (error: string) => {
      setState({ ...state, error });
    },
    [setState],
  );

  const setStatus = useCallback(
    (status: Status) => {
      setState({ ...state, status });
    },
    [setState],
  );

  const setData = useCallback(
    (imageUrl: string | undefined) => {
      setState({ ...state, imageUrl });
    },
    [setState],
  );

  const onChange = useCallback(async () => {
    if (!imageInputRef || !imageInputRef.current) return;
    const files = imageInputRef.current.files;
    if (!files) return;
    const file = files[0];
    const fileType = file.type;
    setStatus(Status.uploading);
    const uploadUrlResult = await storageApi.getUploadLink({ fileType });
    if (uploadUrlResult.isError) {
      setError('Unable to get upload url');
      return;
    }
    const uploadUrl = uploadUrlResult.getValue().uploadLink;

    try {
      await uploadFile(file, uploadUrl);
    } catch (e) {
      imageInputRef.current.files = null;
      setState({
        error: 'Unable to upload file to the server',
        imageUrl: undefined,
        status: Status.rejected,
      });
      return;
    }
    setState({
      error: undefined,
      imageUrl: uploadUrl.split('?')[0],
      status: Status.success,
    });
  }, [imageInputRef, setState]);

  const onRemove = useCallback(async () => {
    setState({ ...state, status: Status.deleting });
    await storageApi.deleteFile({ downloadUrl: state.imageUrl as string });
    setState(initialState);
    if (!imageInputRef || !imageInputRef.current) return;
    imageInputRef.current.value = '';
  }, [imageInputRef, state, setState]);

  const uploadFile = useCallback(
    async (file: any, uploadUrl: string): Promise<any> => {
      return fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });
    },
    [],
  );

  useEffect(() => {
    if (imageInputRef && imageInputRef.current) {
      imageInputRef.current.addEventListener('change', onChange);
    }

    return () => {
      if (imageInputRef && imageInputRef.current) {
        imageInputRef.current.removeEventListener('change', onChange);
      }
    };
  }, [imageInputRef]);

  return useMemo(
    () => ({
      isIdle: state.status === Status.idle,
      isUploading: state.status === Status.uploading,
      isRejected: state.status === Status.rejected,
      isSuccess: state.status === Status.success,
      isDeleting: state.status === Status.deleting,
      error: state.error,
      imageUrl: state.imageUrl,
      onChange,
      uploadFile,
      onRemove,
      imageInputRef,
    }),
    [state, imageInputRef, onChange, uploadFile, onRemove],
  );
}

export default useImageUpload;
