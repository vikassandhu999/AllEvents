import {User} from "../domain/User";

export class UserMapper {
    public static toDomain(userModel: any): User {
        return new User({
            userId: userModel.user_id,
            fullName: userModel.full_name,
            email: userModel.email,
            password: userModel.password,
            imgAvatar : userModel.img_avatar,
            isPerformer : userModel.is_performer,
            performerProfile : userModel.performer_profile,
            isEmailVerified: userModel.is_email_verified,
            isDeleted: userModel.is_deleted,
            createdAt: userModel.created_at,
            authSecret: userModel.auth_secret
        });
    }

    public static toPersistence(user: User): any {
        return {
            user_id: user.userId,
            full_name: user.fullName,
            email: user.email,
            password: user.password,
            img_avatar : user.imgAvatar,
            is_performer : user.isPerformer,
            performer_profile : user.performerProfile,
            is_email_verified: user.isEmailVerified,
            is_deleted: user.isDeleted,
            created_at: user.createdAt,
            auth_secret: user.authSecret
        }
    }
}