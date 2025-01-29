import { FC } from "react";
import { IoAddOutline as Add } from "react-icons/io5";

interface BtnOpenModalProps {
    handlerClick: ()=>void
}

const BtnOpenModal:FC<BtnOpenModalProps> = ({handlerClick})=>{
    return <button className="bg-[#B49BE0] rounded-full absolute bottom-16 right-16 w-[5rem] h-[5rem] shadow-2xl flex items-center justify-center transition-all duration-200 hover:bg-[#9c7cd4] hover:cursor-pointer" onClick={handlerClick}>
        <Add className="text-white size-11"/>
    </button>
}


export default BtnOpenModal