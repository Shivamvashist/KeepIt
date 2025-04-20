import {Types} from 'mongoose';

export enum stashTypes{
    Link = 'link',
    Note = 'note',
    Tweet = 'tweet',
    Video = 'video',
    Doc = 'document',
    Shorts = 'short videos'

}

export interface IStash{
    userId:Types.ObjectId,
    title:string,
    content:string,
    type:stashTypes,
    tag?:string[]
}

