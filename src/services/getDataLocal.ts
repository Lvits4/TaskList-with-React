export const getDataLocal = (key:string):[]|undefined=>{

    const item = localStorage.getItem(key)

    if(item){
        return JSON.parse(item)
    }else{
        console.log(`no existe un valor con la clave ${key}`)
        return undefined
    }

}