import { Schema , model , SchemaTypes} from "mongoose";

const { String , Date, Boolean} = SchemaTypes;

const performerSchema = new Schema({
    stage_name : {required : true, type : String},
    about: { required : true, type : String },
});

const userSchema = new Schema({
    user_id: { required : true, unique : true, type : String },
    full_name:{ required : true, type : String},
    img_avatar:{type : String},
    email: { required : true, unique : true, type : String },
    password: { required : true, type : String },
    performer_profile:  { type : performerSchema },
    is_performer:  { required : true, default : false, type : Boolean },
    is_email_verified: { required : true, default : false, type : Boolean },
    is_deleted:  { required : true, default : false, type : Boolean },
    created_at:  { required : true, type : Date },
    auth_secret:  { type : String },
});

userSchema.index("user_id");
userSchema.index("email");

const UserModel = model("user" , userSchema);
export {
    UserModel
}