import { tpDataRegister } from "../types/tpDataRegister/tpDataRegister";
import { tpNote } from "../types/tpNote/tpNote";




export const setNote = (dataRegister: tpDataRegister, newNote: tpNote) => {
    const dataUser = localStorage.getItem('users')
    let arrUser: tpDataRegister[] = []

    if (dataUser) {
        const dataUserObj = JSON.parse(dataUser)
        arrUser = [...dataUserObj]
        const element = arrUser.find((item: Partial<{ id: number }>) => item.id === dataRegister.id)

        if (element) {
            if (!element.notes) {
                element.notes = []
            }
            element.notes.push(newNote)
            localStorage.setItem('users', JSON.stringify(arrUser))
            return true
        }

        return false
    }

    return false
}