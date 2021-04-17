import {v4 as uuid} from "uuid";

export interface IUser {
    userId : string;
    firstName : string;
    lastName ?: string;
    imgAvatar ?: string;
    email : string;
    password : string;
    about ?: string;
    isEmailVerified : boolean;
    isDeleted : boolean;
    createdAt : Date;
    authSecret ?: string;
}

export interface UserProps {
    userId ?: string;
    firstName : string;
    lastName ?: string;
    imgAvatar ?: string;
    email : string;
    password : string;
    about ?: string;
    isEmailVerified ?: boolean;
    isDeleted ?: boolean;
    createdAt ?: Date;
    authSecret?: string;

}

export default class User {
    state : IUser;
    constructor(props : UserProps) {
        this.state = {...props,
            userId:props.userId??uuid(),
            lastName:props.lastName??undefined,
            imgAvatar:props.imgAvatar??undefined,
            about:props.about??undefined,
            isDeleted:props.isDeleted??false,
            isEmailVerified:props.isEmailVerified??false,
            createdAt:props.createdAt??new Date(),
            authSecret:props.authSecret??undefined
        };
    }


    set userId(userId:string) {
        this.state.userId=userId;
    }
    set firstName(firstName:string) {
        this.state.firstName=firstName;
    }
    set lastName(lastName:string | undefined) {
        this.state.lastName=lastName;
    }
    set imgAvatar(imgAvatar:string | undefined) {
        this.state.imgAvatar=imgAvatar;
    }
    set email(email:string) {
        this.state.email=email;
    }
    set password(password:string) {
        this.state.password=password;
    }
    set about(about:string | undefined) {
        this.state.about=about;
    }
    set isEmailVerified(isEmailVerified:boolean) {
        this.state.isEmailVerified=isEmailVerified;
    }
    set isDeleted(isDeleted:boolean) {
        this.state.isDeleted=isDeleted;
    }
    set createdAt(createdAt:Date) {
        this.state.createdAt=createdAt;
    }
    set authSecret(authSecret:string | undefined) {
        this.state.authSecret=authSecret;
    }



    get userId(): string {
        return this.state.userId;
    }
    get firstName(): string {
        return this.state.firstName;
    }
    get lastName(): string | undefined {
        return this.state.lastName;
    }
    get imgAvatar(): string | undefined {
        return this.state.imgAvatar;
    }
    get email(): string {
        return this.state.email;
    }
    get password(): string {
        return this.state.password;
    }
    get about(): string | undefined {
        return this.state.about;
    }
    get isEmailVerified(): boolean {
        return this.state.isEmailVerified;
    }
    get isDeleted(): boolean {
        return this.state.isDeleted;
    }
    get createdAt(): Date {
        return this.state.createdAt;
    }
    get authSecret(): string | undefined {
        return this.state.authSecret;
    }

    toDTO() : IUser {
        return this.state;
    }
}
