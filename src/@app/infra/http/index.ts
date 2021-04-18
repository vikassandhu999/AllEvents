import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import {handleExpressErrors} from "./utils";
import {userRouter} from "user/infra/http/router";


const app = express();

app.use(cors({
    origin: [`http://localhost:3000`, `https://localhost:5000`],
    credentials: true
}));

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

if(process.env.NODE_ENV!="production") {
    app.use(morgan("dev"));
}

// app.use("/v1/forum0" , forumRouter);
app.use("/v1" , userRouter);

app.use(handleExpressErrors);

export {
    app
}