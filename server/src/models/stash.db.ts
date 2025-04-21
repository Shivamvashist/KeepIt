import mongoose, { Schema,Document } from "mongoose";
import { IStash,stashTypes } from "../types/stash.interface";

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
        type:URL,
    },
    content:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:Object.values(stashTypes), // Object.values(a Obj) => gives array of the values stored in obj.
        required:true
    },
    tag:[{
        type:String,
        // ref:"Tag"
    }]
},{
    timestamps:true
});

const stashModel = mongoose.model<IStashDocument>("Stash",stashSchema);

export default stashModel;