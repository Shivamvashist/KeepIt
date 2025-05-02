import { API } from "./axios";

export async function getStash(){
    try {
        const userData = await API.get('/stash/stashItems');
        const stashItems = userData.data.items || [];
        return {stashItems:stashItems,isEmpty:stashItems.length===0}
    } catch (error) {
        return {stashItems:null,isEmpty:true}
    }

}