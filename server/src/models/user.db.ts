import mongoose, { Schema, ObjectId, Document } from "mongoose";
import {IUser} from "../types/user.interface"; //Dont use @types

export interface IUserDocument extends IUser,Document{};

const userSchema = new Schema<IUserDocument>({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
          ],
    },
    username:{
        type: String,
        unique:true,
        required: true,
        lowecase: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const userModel = mongoose.model<IUserDocument>("User",userSchema)

export default userModel;

// module.exports {
//     userModel:userModel
// }

