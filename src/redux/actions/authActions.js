import { POST_LOGIN } from "../constants/authConstants"

export const postLogin=(username,password)=>{
    return {
        type:POST_LOGIN,
        payload:{username,password}
    }
}

