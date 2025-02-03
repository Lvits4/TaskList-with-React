import { getDataSession } from './getDataSession';
import { findItem } from "./findItem";
import { getDataLocal } from "./getDataLocal";

export const setDataLocal = (key: string, data: Object, typeSave: 'user' | 'note' = 'user') => {

    switch (typeSave) {
        case 'user':
            const item = getDataLocal('users')

            if (item) {
                item.push(data as never)

                localStorage.setItem(key, JSON.stringify(item))
            }else{
                localStorage.setItem(key, JSON.stringify([data]))
            }
            break;

        case 'note':
            const element = getDataLocal('users')
            const userId = getDataSession('users') as Partial<{ id: number }>
            if (element) {
                const user = findItem('id', element, userId.id) as Partial<{ id: number, notes: [] }>
                user ? user.notes?.push(data as never) : null
                const index = element.findIndex((item: Partial<{ id: number }>) => item.id === userId.id)
                if (index !==-1) {

                    element[index] = { ...user } as never

                    localStorage.setItem(key, JSON.stringify(element))
                    sessionStorage.setItem(key, JSON.stringify(user))

                }
            }
            break;

        default:
            console.log('No existe ese tipo de guardado')
            break;
    }


    return true
}