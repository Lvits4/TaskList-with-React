/**
 * 
 * @param key 
 * @returns 
 */

export const getDataSession = (key:string):Object|undefined=>{

    const item = sessionStorage.getItem(key)

    if(item !== undefined && item !== null){
        console.log(item)
        return JSON.parse(item)
    }else{
        console.log(`no existe un valor con la clave ${key}`)
        return undefined
    }

}