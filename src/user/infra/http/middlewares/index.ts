import {AuthMiddleware} from "user/infra/http/middlewares/authMiddleware";
import {userRepository} from "user/repositories";

const authMiddleware = new AuthMiddleware(userRepository);

export {
    authMiddleware
}