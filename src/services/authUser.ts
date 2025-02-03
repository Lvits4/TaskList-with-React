import { getDataLocal } from "./getDataLocal"



export const authUser = (key: string, data: Partial <{email:string, password:string}>)=>{
    const users = getDataLocal(key)
    
    if(users){
        
        const element = users.find((item: Partial<{email:string}>)=>item.email === data.email)

        if(element){
            const item = users.find((item: Partial<{password:string}>)=>item.password === data.password)
            sessionStorage.setItem(key, JSON.stringify(item))
            return true
        }
    }

    return false

}