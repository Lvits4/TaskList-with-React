import { FC, SyntheticEvent, useState } from "react"
import CarouselBackground from "../carouselBackground/carouselBackground"
import BtnGeneric from "../btnGeneric/btnGeneric"
import { tpNote, tpValidateNote } from "../../types/tpNote/tpNote"
import { setDataLocal } from "../../services/setDataLocal"


interface FormAddNoteProps {
    validateNewNote: tpValidateNote
    setValidateNewNote: (validateNewNote:tpValidateNote)=>void
    setShowModal: (arg:boolean)=>void
    setNotes: (arg:tpNote[])=>void
    notes: tpNote[]
}


const FormAddNote: FC<FormAddNoteProps> = ({ 
    validateNewNote, 
    setValidateNewNote, 
    setShowModal }) => {


    const [backgroundImage, setBackgroundImage] = useState<string>('')

    const [newNote, setNewNote] = useState<tpNote>({
        id: Math.random() * 100,
        title: '',
        description: '',
        background: ''
    })

    const handlerBackgroundImage = (arg: string) => {
        setBackgroundImage(arg)
        handlerChange('background', arg)
    }

    const handlerHiddenModal = () => {
        setShowModal(false)
    }

    const handlerChange = (key: keyof tpNote, arg: string) => {
        setNewNote({ ...newNote, [key]: String(arg) })

        if (arg.trim() !== '') {
            setValidateNewNote({ ...validateNewNote, [key]: true })

        } else {
            setValidateNewNote({ ...validateNewNote, [key]: false })

        }
    }


    const handlerSubmit = (event: SyntheticEvent) => {
            event.preventDefault()
    
            const allInputsValid = Object.keys(validateNewNote).every((item: string) => {
                const key = item as keyof tpValidateNote;
    
                return validateNewNote[key];
            });
    
    
            if (allInputsValid) {
                setDataLocal('users', newNote, 'note')
                setShowModal(false)
              
            } else {
                console.log('No funciono')
            }

        }

    return <form className="bg-[#B49BE0] w-[35rem] rounded-xl p-8 flex flex-col items-center justify-center z-50 fixed gap-8 shadow-2xl" onSubmit={handlerSubmit}>
        <h1 className="text-white text-3xl">Create a new task</h1>
        <input style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white rounded-lg w-full h-12 border-2 border-[#E2D2FE] focus:outline-none px-5 placeholder:text-xl text-gray-500" placeholder="Title" onChange={(e) => handlerChange('title', e.target.value)}></input>
        <textarea style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white resize-none rounded-lg w-full h-[16rem] border-2 border-[#E2D2FE] focus:outline-none p-5 placeholder:text-xl pt-4 text-gray-500" placeholder="Description" onChange={(e) => handlerChange('description', e.target.value)}></textarea>
        <CarouselBackground handlerBackgroundImage={handlerBackgroundImage}/>
        <div className="flex w-full justify-around items-center text-white">
            <BtnGeneric label='Cancelar' handlerClick={handlerHiddenModal} />
            <BtnGeneric label='Aceptar' type='submit'/>
        </div>

    </form>
}

export default FormAddNote