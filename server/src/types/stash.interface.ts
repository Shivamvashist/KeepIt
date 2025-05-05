import {Types} from 'mongoose';

export enum stashTypes {
    Link = "Link",
    Note = "Note",
    Tweet = "Tweet",
    Video = "Video",
    Doc = "Doc",
    Shorts = "Shorts"
}

export interface IStash{
    userId:Types.ObjectId,
    title:string,
    link?:string,
    content:string,
    type:stashTypes,
    tag?:string[]
}

