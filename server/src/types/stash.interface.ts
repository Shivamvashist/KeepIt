import {Types} from 'mongoose';

export enum stashTypes{
    Link,
    Note,
    Tweet,
    Video,
    Doc,
    Shorts

}

export interface IStash{
    userId:Types.ObjectId,
    title:string,
    link:URL,
    content:string,
    type:stashTypes,
    tag?:string[]
}

