import {v4 as uuid} from "uuid";
import {IPerformer} from "./Performer";

export type UserDTO = {
    userId: string;
    fullName: string;
    imgAvatar?: string;
    email: string;
    password: string;
    performerProfile?: IPerformer;
    isPerformer: boolean;
    isEmailVerified: boolean;
    isDeleted: boolean;
    createdAt: Date;
    authSecret?: string;
}

export class User {
    public userId: string;
    public fullName: string;
    public email: string;
    public password: string;
    public imgAvatar?: string;
    public isPerformer: boolean;
    public performerProfile?: IPerformer;
    public isEmailVerified: boolean;
    public isDeleted: boolean;
    public createdAt: Date;
    public authSecret?: string;

    constructor(params: any) {
        this.userId = params.userId ?? uuid();
        this.fullName = params.fullName;
        this.email = params.email;
        this.password = params.password;
        this.imgAvatar = params.imgAvatar;
        this.isPerformer = params.isPerformer ?? false;
        this.performerProfile = params.performerProfile;
        this.isEmailVerified = params.isEmailVerified ?? false;
        this.isDeleted = params.isDeleted ?? false;
        this.createdAt = params.createdAt ?? new Date();
        this.authSecret = params.authSecret ?? undefined;
    }

    toDTO(): UserDTO {
        return {
            userId: this.userId,
            fullName: this.fullName,
            email: this.email,
            imgAvatar : this.imgAvatar,
            isPerformer: this.isPerformer,
            password: this.password,
            performerProfile: this.performerProfile,
            isEmailVerified: this.isEmailVerified,
            isDeleted: this.isDeleted,
            createdAt: this.createdAt,
            authSecret: this.authSecret
        }
    }
}