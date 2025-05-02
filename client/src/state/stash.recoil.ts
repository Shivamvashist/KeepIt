import { atom } from "recoil";

interface IstashItems {
    type:string;
    title: string;
    link?: string;
    content: string;
    tags?:string[];
}

export const stashState = atom({
    key:"stashState",
    default: {
        stashItems: null as null | IstashItems[],
        isEmpty: true,
        isLoading: true,
    }
})