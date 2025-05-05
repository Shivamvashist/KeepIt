import mongoose, { Schema,Document } from "mongoose";
import { IStash,stashTypes } from "../types/stash.interface";
import userModel from '../models/user.db';

interface IStashDocument extends IStash,Document{};

const stashSchema = new Schema<IStashDocument>({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        required:true,
    },
    link:{
        type:String,
    },
    content:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:Object.values(stashTypes).filter(type => typeof type === 'string'), // Object.values(a Obj) => gives array of the values stored in obj.
        required:true
    },
    tag:[{
        type:String,
        // ref:"Tag"
    }]
},{
    timestamps:true
});


//can also use validate within the schema but this pre('save') hook is much better.
//it runs before making an entry thus making the entries more secure

stashSchema.pre<IStashDocument>('save', async function (next) {
    const user = await userModel.findById(this.userId);
    if (!user) {
      throw new Error('User does not exist');
    }
    next();
  });

const stashModel = mongoose.model<IStashDocument>("Stash",stashSchema);

export default stashModel;