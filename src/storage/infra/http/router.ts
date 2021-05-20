import express from 'express';
import getUploadLinkUseCase from 'storage/usecase/GetUploadLink';
import { authMiddleware } from 'user/infra/http/middlewares';
import deleteFileUseCase from 'storage/usecase/DeleteFile';

const storageRouter = express.Router();

storageRouter.get(
  '/storage/upload-link',
  authMiddleware.getUserContext(),
  async (req: express.Request, res, next) => {
    try {
      const fileType = req.query.fileType as string;
      const response = await getUploadLinkUseCase.run(
        { fileType },
        req.context,
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

storageRouter.delete(
  '/storage/file',
  authMiddleware.getUserContext(),
  async (req: express.Request, res, next) => {
    try {
      const downloadUrl = req.query.downloadUrl as string;
      const response = await deleteFileUseCase.run(
        { downloadUrl },
        req.context,
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

export { storageRouter };
