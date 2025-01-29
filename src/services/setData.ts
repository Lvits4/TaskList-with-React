import { tpDataRegister } from "../types/tpDataRegister/tpDataRegister";


export const setData = (newUser: tpDataRegister)=>{
    const dataUser = localStorage.getItem('users')
    let arrUser: any = []

    if(dataUser){
        const dataUserObj = JSON.parse(dataUser)
        arrUser = [...dataUserObj]
    }

    const elementRegister = arrUser.find((item: Partial<{ email: string }>) => item.email === newUser.email)
    if(elementRegister){
        return false
    }else{
        arrUser.push(newUser)
        localStorage.setItem('users', JSON.stringify(arrUser)); 
        return true
    }

}