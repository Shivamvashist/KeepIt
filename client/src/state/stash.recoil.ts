import { atom } from "recoil";

export interface IstashItems {
    _id:string;
    type:string;
    title: string;
    link?: string;
    content: string;
    tag?:string[];
    createdAt:string;
    updatedAt:string;
}

export const stashState = atom({
    key:"stashState",
    default: {
        stashItems: null as null | IstashItems[],
        isEmpty: true,
        isLoading: true,
    }
})