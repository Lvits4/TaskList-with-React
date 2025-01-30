import { FC, SyntheticEvent, useState } from "react"
import CarouselBackground from "../carouselBackground/carouselBackground"
import BtnGeneric from "../btnGeneric/btnGeneric"
import { tpNote } from "../../types/tpNote/tpNote"


interface FormAddNoteProps {
    handlerChange: (key: keyof tpNote, arg: string) => void
    handlerHiddenModal: () => void
    handlerAcept: (e:SyntheticEvent)=>void

}


const FormAddNote: FC<FormAddNoteProps> = ({ handlerChange, handlerHiddenModal, handlerAcept }) => {


    const [backgroundImage, setBackgroundImage] = useState<string>('')

    const handlerBackgroundImage = (url: string) => {
        setBackgroundImage(url)
    }

    return <form className="bg-[#B49BE0] w-[35rem] rounded-xl p-8 flex flex-col items-center justify-center z-50 fixed gap-8 shadow-2xl">
        <h1 className="text-white text-3xl">Create a new task</h1>
        <input style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white rounded-lg w-full h-12 border-2 border-[#E2D2FE] focus:outline-none indent-5 placeholder:text-xl text-gray-500" placeholder="Title" onChange={(e) => handlerChange('title', e.target.value)}></input>
        <textarea style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white resize-none rounded-lg w-full h-[16rem] border-2 border-[#E2D2FE] focus:outline-none indent-5 placeholder:text-xl pt-4 text-gray-500" placeholder="Description" onChange={(e) => handlerChange('description', e.target.value)}></textarea>
        <CarouselBackground handlerBackgroundImage={handlerBackgroundImage}/>
        <div className="flex w-full justify-around items-center text-white">
            <BtnGeneric label='Cancelar' handlerClick={handlerHiddenModal} />
            <BtnGeneric label='Aceptar' handlerClick={handlerAcept}/>
        </div>

    </form>
}

export default FormAddNote