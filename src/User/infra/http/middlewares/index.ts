import {AuthMiddleware} from "User/infra/http/middlewares/authMiddleware";
import {userRepository} from "User/repositories";

const authMiddleware = new AuthMiddleware(userRepository);

export {
    authMiddleware
}