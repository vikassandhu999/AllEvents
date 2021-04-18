import axios from 'axios';
import Result from "@allevents/core/Result";
import {AuthEmailStatusResponse, GetAuthStatusProps, LoginProps, SignupProps} from "auth/http/auth/types";

const baseURL = "http://localhost:5000/v1";

export interface IAuthApi {
    getAuthStatus(props: GetAuthStatusProps): Promise<Result<AuthEmailStatusResponse>>;

    login(props: LoginProps): Promise<Result<any>>;

    signup(props: SignupProps): Promise<Result<any>>;
}

class AuthApi implements IAuthApi {
    httpClient: any;

    constructor() {
        this.httpClient = axios.create({
            baseURL: baseURL,
            headers: {'Accept': 'application/json'}
        });
        // this.httpClient.interceptors.request.use((config) => {
        //     if (typeof window != 'undefined') {
        //         config.headers.Authorization = localStorage.getItem("token");
        //     }
        //     return config;
        // }, (error) => {
        //     return Promise.reject(error.message);
        // });
    }

    async getAuthStatus(props: GetAuthStatusProps): Promise<Result<AuthEmailStatusResponse>> {
        try {
            const response = await this.httpClient.post("/user/email/status", {...props});
            return Result.success<AuthEmailStatusResponse>(response.data);
        } catch (e) {
            return Result.failed<AuthEmailStatusResponse>(e.response.data);
        }
    }

    async login(props: LoginProps): Promise<Result<any>> {
        try {
            const response = await this.httpClient.post("/user/login", {...props});
            return Result.success<any>(response.data);
        } catch (e) {
            return Result.failed<any>(e.response.data);
        }
    }

    async signup(props: SignupProps): Promise<Result<any>> {
        try {
            const response = await this.httpClient.post("/user", {...props});
            return Result.success<any>(response.data);
        } catch (e) {
            return Result.failed<any>(e.response.data);
        }
    }

}

const authApi = new AuthApi();

export default authApi;