import User from "user/domain/User";

export default class UserMapper {
    public static toDomain(model: any) {
        return new User({
            userId: model.user_id,
            firstName: model.first_name,
            lastName: model.last_name,
            imgAvatar: model.img_avatar,
            email: model.email,
            password: model.password,
            about: model.about,
            isEmailVerified: model.is_email_verified,
            isDeleted: model.is_deleted,
            createdAt: model.created_at,
            authSecret: model.auth_secret,
        })
    }

    public static toPersistence(domainModel: User) {
        return {
            user_id: domainModel.userId,
            first_name: domainModel.firstName,
            last_name: domainModel.lastName,
            img_avatar: domainModel.imgAvatar,
            email: domainModel.email,
            password: domainModel.password,
            about: domainModel.about,
            is_email_verified: domainModel.isEmailVerified,
            is_deleted: domainModel.isDeleted,
            created_at: domainModel.createdAt,
            auth_secret: domainModel.authSecret,
        }
    }

}