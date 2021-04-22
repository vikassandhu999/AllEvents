// import {IEventRepository} from "event/repositories/IEventRepository";
// import Event from "event/domain/Event";
//
//
// export class MongooseUserRepository implements IEventRepository{
//     private readonly model = {
//
//     };
//
//     async getById(userId: string): Promise<User | null> {
//         const user = await this.model.findOne({user_id : userId}).exec();
//         if(!user) return null;
//         return UserMapper.toDomain(user);
//     }
//
//     async save(user: Event): Promise<void> {
//         const userDoc = UserMapper.toPersistence(user);
//         const newUser = new UserModel(userDoc);
//         await newUser.save();
//     }
//
//     async setAuthSecret(userId : string, authSecret: string): Promise<void> {
//         return await this.model.updateOne({user_id : userId} , {auth_secret : authSecret});
//     }
//
//     async deleteOne(userId : string) : Promise<void> {
//         return await this.model.deleteOne({user_id : userId});
//     }
//
//     async deleteAll() : Promise<void> {
//         return await this.model.deleteMany();
//     }
//
//     async setIsEmailVerified(userId: string, value: boolean): Promise<void> {
//         return await this.model.updateOne({user_id : userId} , {is_email_verified : value});
//     }
// }