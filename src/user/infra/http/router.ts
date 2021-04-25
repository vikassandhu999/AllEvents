import express, { Request } from 'express';
import authEmailStatusUseCase from 'user/usecase/AuthEmailStatus';
import createUserUseCase from 'user/usecase/CreateUser';
import sendEmailVerificationUseCase from 'user/usecase/SendEmailVerification';
import getUserProfileUseCase from 'user/usecase/GetUserProfile';
import { UserContext } from 'user/domain/UserContext';
import { authMiddleware } from 'user/infra/http/middlewares';
import verifyUserEmailUseCase from 'user/usecase/VerifyUserEmail';
import loginUserUseCase from 'user/usecase/LoginUser';

const userRouter = express.Router();

//this one is an experimental route
//we are working on different auth style for better UX
userRouter.post('/user/email/status', async (req, res, next) => {
  try {
    const response = await authEmailStatusUseCase.run(req.body, {});
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

userRouter.post('/user', async (req, res, next) => {
  try {
    console.log(req.body);
    const response = await createUserUseCase.run(req.body, {});
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

userRouter.get(
  '/user',
  authMiddleware.getUserContext(),
  async (req: Request, res, next) => {
    try {
      const response = await getUserProfileUseCase.run(
        {},
        req.context as UserContext,
      );
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  },
);

userRouter.get('/user/email/:email/verify', async (req, res, next) => {
  try {
    const email = req.params.email;
    const response = await sendEmailVerificationUseCase.run({ email }, {});
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

userRouter.post('/user/email/verify', async (req, res, next) => {
  try {
    const verificationToken = req.body.verificationToken;
    const response = await verifyUserEmailUseCase.run(
      { verificationToken },
      {},
    );
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
});

userRouter.post('/user/login', async (req, res, next) => {
  try {
    const response = await loginUserUseCase.run(req.body, {});

    res.cookie('access-token', response.accessToken);
    res.cookie('refresh-token', response.refreshToken);

    res.status(200).json({ status: 'success' });
  } catch (e) {
    next(e);
  }
});

export { userRouter };
