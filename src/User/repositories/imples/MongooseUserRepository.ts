import {IUserRepository} from "../IUserRepository";
import {UserModel} from "User/infra/database/mongoose/models/UserModel";
import UserMapper from "User/mapper/UserMapper";
import User from "User/domain/User";


export class MongooseUserRepository implements IUserRepository{
    private readonly model = UserModel;

    async emailExists(email: string): Promise<boolean> {
        const exists = await this.model.exists({email});
        return !!exists;
    }

    async getAuthSecret(userId: string): Promise<string | null> {
        const user = await this.model.findOne({user_id : userId} , "auth_secret").exec();
        if(!user) return null;
        // @ts-ignore
        return user.auth_secret??null;
    }

    async getByEmail(email: string): Promise<User | null> {
        const user = await this.model.findOne({email}).exec();
        if(!user) return null;
        return UserMapper.toDomain(user);
    }

    async getById(userId: string): Promise<User | null> {
        const user = await this.model.findOne({user_id : userId}).exec();
        if(!user) return null;
        return UserMapper.toDomain(user);
    }

    async save(user: User): Promise<void> {
        const userDoc = UserMapper.toPersistence(user);
        const newUser = new UserModel(userDoc);
        await newUser.save();
    }

    async setAuthSecret(userId : string, authSecret: string): Promise<void> {
        return await this.model.updateOne({user_id : userId} , {auth_secret : authSecret});
    }

    async deleteOne(userId : string) : Promise<void> {
        return await this.model.deleteOne({user_id : userId});
    }

    async deleteAll() : Promise<void> {
        return await this.model.deleteMany();
    }

    async setIsEmailVerified(userId: string, value: boolean): Promise<void> {
        return await this.model.updateOne({user_id : userId} , {is_email_verified : value});
    }
}