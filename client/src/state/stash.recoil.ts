import { atom } from "recoil";

interface IstashItems {
    userId:string;
    type:string;
    title: string;
    link?: string;
    content: string;
    tag?:string[];
}

export const stashState = atom({
    key:"stashState",
    default: {
        stashItems: null as null | IstashItems[],
        isEmpty: true,
        isLoading: true,
    }
})