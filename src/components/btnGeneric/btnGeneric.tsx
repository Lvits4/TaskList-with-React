import { FC, SyntheticEvent } from "react"


interface BtnGenericProps {
    label: string
    classElement?:string
    handlerClick?: (e:SyntheticEvent)=>void

}


const BtnGeneric:FC<BtnGenericProps> = ({label, classElement, handlerClick})=>{
    return <button className={`bg-[#E2D2FE]  px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#9c7cd4] ${classElement}`} onClick={handlerClick}>{label}</button>
}

export default BtnGeneric