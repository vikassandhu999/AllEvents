import React, { FC, useEffect } from 'react';
import EmptyState from '@pluralsight/ps-design-system-emptystate';
import { css } from 'glamor';
import { Label } from '@pluralsight/ps-design-system-text';
import { TrashIcon } from '@pluralsight/ps-design-system-icon';
import CircularProgress from '@pluralsight/ps-design-system-circularprogress';
import useImageUpload from '@app/@allevents/components/image-upload/use-upload-image';
import Button from '@pluralsight/ps-design-system-button';

interface ImageUploadProps {
  onImageChange?: (url: string | undefined) => void;
  onError?: (error: string) => void;
  label?: string;
}

const UploadIllustration = EmptyState.Illustration.names.upload;
const IllustrationSize = EmptyState.sizes.small;

const IdleView: FC<{ label?: string }> = ({ label }) => {
  return (
    <EmptyState
      key={UploadIllustration}
      style={{ alignSelf: 'center', margin: '0', padding: '0' }}
      heading={
        <EmptyState.Heading style={{ fontSize: 14 }}>
          {'Choose from storage or drop file here'}
        </EmptyState.Heading>
      }
      illustration={<EmptyState.Illustration name={UploadIllustration} />}
      size={IllustrationSize}
    />
  );
};

const LoadingView: FC<{ operation?: string }> = ({ operation }) => {
  return (
    <div
      className={`${css({
        width: '100%',
        display: 'flex',
        minHeight: '80px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      })}`}
    >
      <CircularProgress size={CircularProgress.sizes.small} />
      <Label
        className={`${css({
          margin: '1rem',
        })}`}
      >
        {operation ?? 'Uploading'}...
      </Label>
    </div>
  );
};

const SuccessView: FC<{ imageUrl?: string; onRemove: () => Promise<void> }> = ({
  imageUrl,
  onRemove,
}) => {
  return (
    <>
      <img
        className={`${css({
          maxWidth: '300px',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          display: 'block',
        })}`}
        src={imageUrl}
      />
      <div
        className={`${css({
          position: 'absolute',
          right: 0,
          bottom: 0,
          cursor: 'pointer',
        })}`}
      >
        <Button
          type={'button'}
          icon={<TrashIcon />}
          appearance={Button.appearances.flat}
          title="Remove file"
          onClick={onRemove}
        />
      </div>
    </>
  );
};

const ImageUpload: FC<ImageUploadProps> = ({
  label,
  onImageChange,
  onError,
}) => {
  const {
    isUploading,
    isIdle,
    error,
    isDeleting,
    isSuccess,
    isRejected,
    imageInputRef,
    imageUrl,
    onRemove,
  } = useImageUpload();
  const labelId = 'this-needs-to-be-a-unique-label-id-1';
  const inputId = 'this-needs-to-be-a-unique-input-id-1';

  useEffect(() => {
    if (onImageChange) {
      onImageChange(imageUrl);
    }
  }, [imageUrl]);

  return (
    <div
      className={`${css({
        width: '100%',
        display: 'block',
        marginBottom: '4rem',
      })}`}
    >
      <Label>{label ?? 'Upload'}</Label>
      <div
        className={`${css({
          position: 'relative',
          display: 'block',
          width: '100%',
          marginTop: '0.8rem',
          border: '1px solid rgba(0, 0, 0, 0.30)',
        })}`}
      >
        <input
          className={`${css({
            display: isSuccess ? 'none' : 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100px',
            opacity: 0,
            cursor: 'pointer',
          })}`}
          id={inputId}
          ref={imageInputRef}
          placeholder={'UploadFile'}
          type={'file'}
          multiple={false}
        />

        {isIdle && <IdleView />}
        {(isUploading || isDeleting) && (
          <LoadingView operation={isDeleting ? 'Deleting' : undefined} />
        )}
        {isSuccess && <SuccessView onRemove={onRemove} imageUrl={imageUrl} />}
      </div>
    </div>
  );
};

export default ImageUpload;
