import { tpDataRegister } from "../types/tpDataRegister/tpDataRegister"
import { tpNote } from "../types/tpNote/tpNote"


export const getNote = (newNote: tpNote) => {
    const dataUser = localStorage.getItem('users')

    let arrUser: tpDataRegister[] = []

    if (dataUser) {
        const dataUserObj = JSON.parse(dataUser)
        arrUser = [...dataUserObj]

        arrUser = { ...dataUserObj.notes.find((item: Partial<{ id: number }>) => item.id === newNote.id) }

        return true
        
    }

    return false
}