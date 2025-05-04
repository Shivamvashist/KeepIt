import { API } from "./axios";

export async function delStash(id:string){
    await API.delete(`/stash/deleteStashItem/${id}`)
}