import express, {Request} from "express";
import {sendEmailVerificationUseCase} from "User/usecase/SendEmailVerification";
import {getUserProfileUseCase} from "User/usecase/GetUserProfile";
import {createUserUseCase} from "User/usecase/CreateUser";
import {UserContext} from "User/domain/UserContext";
import {authMiddleware} from "User/infra/http/middlewares";
import {verifyUserEmailUseCase} from "User/usecase/VerifyUserEmail";
import {loginUserUseCase} from "User/usecase/LoginUser";
import authEmailStatusUseCase from "User/usecase/AuthEmailStatus";


const userRouter = express.Router();

//this one is an experimental route
//we are working on different auth style for better UX
userRouter.post("/User/email",
    async (req, res, next) => {
    try {
        const response = await authEmailStatusUseCase.run(req.body, {});
        res.status(200).json(response);
    } catch (e) {
        next(e);
    }
});



userRouter.post("/User",
    async (req, res, next) => {
        try {
            console.log(req.body);
            const response = await createUserUseCase.run(req.body, {});
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

userRouter.get("/User",
    authMiddleware.getUserContext()
    , async (req: Request, res, next) => {
        try {
            const response = await getUserProfileUseCase.run({}, req.context as UserContext);
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

userRouter.get("/User/email/:email/verify",
    async (req, res, next) => {
        try {
            const email = req.params.email;
            const response = await sendEmailVerificationUseCase.run({email}, {});
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

userRouter.post("/User/email/verify",
    async (req, res, next) => {
        try {
            const verificationToken = req.body.verificationToken;
            const response = await verifyUserEmailUseCase.run({verificationToken}, {});
            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    });

userRouter.post("/User/login",
    async (req, res, next) => {
        try {
            const response = await loginUserUseCase.run(req.body, {});

            res.cookie("access-token", response.accessToken);
            res.cookie("refresh-token", response.refreshToken);

            res.status(200).json({status: "success"});
        } catch (e) {
            next(e);
        }
    });

export {
    userRouter
}