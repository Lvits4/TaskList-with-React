import { tpDataLogin } from "../types/tpDataLogin/tpDataLogin";




export const getData = (user: tpDataLogin) => {
    const dataUser = localStorage.getItem('users')

    let emailUser: Partial<{ password: string }> = {}

    if (dataUser) {
        const dataUserObj = JSON.parse(dataUser)
        emailUser = { ...dataUserObj.find((item: Partial<{ email: string }>) => item.email === user.email) }
    }
    if (emailUser) {
        if (emailUser.password === user.password) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

