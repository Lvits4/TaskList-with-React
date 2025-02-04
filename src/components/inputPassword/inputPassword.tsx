import { FC, useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";


interface InputPasswordProps{
    placeholder: string
    handlerChange: (arg:string)=>void
    classElement: string
}



const InputPassword:FC<InputPasswordProps> = ({placeholder, handlerChange,classElement }) => {

    const [visible, setVisible] = useState<boolean>(false)
    const [type, setType] = useState<"text" | "password">('password')

    const handlerClick = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        if (visible) {
            setType('text')
        } else {
            setType('password')
        }
    }, [visible])


    return <div className={`flex w-full items-center bg-white rounded-lg h-10 px-2 ${classElement}`} >
        <input placeholder={placeholder} className={` outline-none w-full h-10 text-gray-500 `} type={type} onChange={(e) => handlerChange(e.target.value)}/>
        <LuEye onClick={handlerClick} className={`text-gray-500 ${visible ? "hidden" : ""}`} />
        <LuEyeOff onClick={handlerClick} className={`text-gray-500 ${visible ? "" : "hidden"}`} />
    </div>


}

export default InputPassword