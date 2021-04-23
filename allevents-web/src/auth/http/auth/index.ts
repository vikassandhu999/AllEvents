import axios from 'axios';
import Result from "@allevents/core/Result";
import {AuthEmailStatusResponse, GetAuthStatusProps, LoginProps, SignupProps} from "auth/http/auth/types";
import axiosErrorWrapper from '@allevents/utils/axiosErrorWrapper';
import UnitResponse from '../../../@allevents/core/UnitResponse';

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

        this.httpClient.defaults.withCredentials = true;
    }

    async getAuthStatus(props: GetAuthStatusProps): Promise<Result<AuthEmailStatusResponse>> {
        try {
            const response = await this.httpClient.post("/user/email/status", {...props});
            return Result.success<AuthEmailStatusResponse>(response.data);
        } catch (e) {
            return Result.failed<AuthEmailStatusResponse>(axiosErrorWrapper(e));
        }
    }


    async login(props: LoginProps): Promise<Result<UnitResponse>> {
        try {
            const response = await this.httpClient.post("/user/login", {...props});
            return Result.success<UnitResponse>(response.data);
        } catch (e) {
            return Result.failed<UnitResponse>(axiosErrorWrapper(e));
        }
    }

    async signup(props: SignupProps): Promise<Result<UnitResponse>> {
        try {
            const response = await this.httpClient.post("/user", {...props});
            return Result.success<UnitResponse>(response.data);
        } catch (e) {
            return Result.failed<UnitResponse>(axiosErrorWrapper(e));
        }
    }

    //TODO: create route on api and test
    async verifyAuth(props: SignupProps): Promise<Result<any>> {
        try {
            const response = await this.httpClient.post("/user", {...props});
            return Result.success<any>(response.data);
        } catch (e) {
            return Result.failed<any>(axiosErrorWrapper(e));
        }
    }

}

const authApi = new AuthApi();

export default authApi;