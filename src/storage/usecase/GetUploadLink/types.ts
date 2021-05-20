export type GetUploadLinkDTO = {
  fileType: string;
};

export class GetUploadLinkResponse {
  constructor(public uploadLink: string, public downloadLink: string) {}
}
