import {UserContext} from "../../src/User/domain/UserContext";

declare module 'express' {
    export interface Request {
        context?: UserContext
        pageQuery?:any
    }
}