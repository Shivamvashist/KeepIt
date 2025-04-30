import { API } from "./axios";

export async function checkAuth(){
    try {
        const userData = await API.get('userAuth/user/me');
        return {isLoggedIn:true, user:userData.data}
    } catch (error) {
        return {isLoggedIn:false, user:null}
    }
}