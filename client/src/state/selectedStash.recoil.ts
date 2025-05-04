import { atom } from "recoil";

interface IEditStashItem {
    _id: string;
    type: string;
    title: string;
    link?: string;
    content: string;
    tag?:string[];
    createdAt:string;
    updatedAt:string;
}

export const selectedStashState = atom({
    key:"selectedStashState",
    default:null as null | IEditStashItem
})