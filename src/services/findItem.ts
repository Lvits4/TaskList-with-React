 /**
  * 
  * @param key 
  * @param arrayElements 
  * @param valueToCompare 
  */
export const findItem = (key:string,arrayElements:[],valueToCompare:any):Object|undefined=>{

    const item =  arrayElements.find(item=>item[key]===valueToCompare)
    if(item){
        return item
    }else{
        console.log(`no existe un valor en ese array con clave ${key} k se asemeje a: ${valueToCompare}`)
        return undefined
    }
}