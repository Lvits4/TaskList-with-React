import { FC, SyntheticEvent, useState } from "react"
import CarouselBackground from "../carouselBackground/carouselBackground"
import BtnGeneric from "../btnGeneric/btnGeneric"
import { tpNote, tpValidateNote } from "../../types/tpNote/tpNote"
import { setDataLocal } from "../../services/setDataLocal"


interface FormAddNoteProps {
    validateNewNote: tpValidateNote
    setValidateNewNote: (validateNewNote: tpValidateNote) => void
    setShowModal: (arg: boolean) => void
    setNotes: (arg: tpNote[]) => void
    notes: tpNote[]
    setBackgroundImage: (arg: string) => void
    backgroundImage: string

}


const FormAddNote: FC<FormAddNoteProps> = ({
    validateNewNote,
    setValidateNewNote,
    setShowModal,
    setBackgroundImage,
    backgroundImage }) => {


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

    return <aside className="bg-[#B49BE0] p-8 w-[80%] h-[90%] md:w-[60%] lg:w-[50%] xl:w-[35%] rounded-xl z-50 fixed shadow-2xl flex items-center justify-center">
        <form className="w-[80%] h-full flex flex-col items-center justify-center gap-8" onSubmit={handlerSubmit}>
            <h1 className="text-white text-3xl">Create a new task</h1>
            <input style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white rounded-lg w-full h-12 border-2 border-[#E2D2FE] focus:outline-none px-5 placeholder:text-xl text-gray-500" placeholder="Title" onChange={(e) => handlerChange('title', e.target.value)}></input>
            <textarea style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white resize-none rounded-lg w-full h-[16rem] border-2 border-[#E2D2FE] focus:outline-none p-5 placeholder:text-xl pt-4 text-gray-500" placeholder="Description" onChange={(e) => handlerChange('description', e.target.value)}></textarea>
            <CarouselBackground handlerBackgroundImage={handlerBackgroundImage} />
            <div className="flex w-full justify-around items-center text-white">
                <BtnGeneric label='Cancelar' handlerClick={handlerHiddenModal} />
                <BtnGeneric label='Aceptar' type='submit' />
            </div>

        </form>
    </aside>


}

export default FormAddNote