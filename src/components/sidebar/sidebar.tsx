import { FC, SyntheticEvent } from "react"
import CarouselBackground from "../carouselBackground/carouselBackground"
import { tpNote, tpValidateNote } from "../../types/tpNote/tpNote";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline as Delete } from "react-icons/md";
import { getDataLocal } from "../../services/getDataLocal";



interface SidebarProps {

    editNote: tpNote;
    setEditNote: (editNote: tpNote) => void;
    validateNewNote?: tpValidateNote;
    setValidateNewNote?: (validateNewNote: tpValidateNote) => void;
    setShowSidebar: (arg: boolean) => void;
    setBackgroundImage: (arg: string) => void;
    notes: tpNote[]
    backgroundImage: string
}



const Sidebar: FC<SidebarProps> = ({
    backgroundImage,
    setBackgroundImage,
    editNote,
    setEditNote,
    setShowSidebar,
    setValidateNewNote,
    validateNewNote,
    notes,
}) => {



    const handlerHiddenSidebar = () => {
        setShowSidebar(false)
    }

    const handlerBackgroundImage = (arg: string) => {
        setBackgroundImage(arg)
        handlerChange('background', arg)
    }

    const handlerChange = (key: keyof tpNote, arg: string) => {
        setEditNote({ ...editNote, [key]: arg })

        if (validateNewNote && setValidateNewNote) {
            if (arg.trim() !== '') {
                setValidateNewNote({ ...validateNewNote, [key]: true })

            } else {
                setValidateNewNote({ ...validateNewNote, [key]: false })

            }
        }
    }

    const handlerSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        const element = getDataLocal('users')
        const user = JSON.parse(sessionStorage.getItem('users') ?? '')

        if (element) {
            const index = element.findIndex((item: Partial<{ id: number }>) => item.id === user.id)

            const indexNote = notes.findIndex((item: tpNote) => item.id === editNote.id)

            if (index !== -1) {
                notes[indexNote] = { ...notes[indexNote], ...editNote }

                const background = notes[indexNote].background
                setBackgroundImage(background)

                if (user) {
                    user['notes'] = [...notes]
                    element[index] = { ...user } as never
                }

                localStorage.setItem('users', JSON.stringify(element))
                sessionStorage.setItem('users', JSON.stringify(user))
            }

        }
        handlerHiddenSidebar()
    }


    const handlerDelete = (e: SyntheticEvent) => {
        e.preventDefault()

        const element = getDataLocal('users')
        const user = JSON.parse(sessionStorage.getItem('users') ?? '')

        if (element) {
            const index = element.findIndex((item: Partial<{ id: number }>) => item.id === user.id)

            const arrNotes = notes.filter((item: tpNote) => item.id !== editNote.id)

            if (index !== -1) {
                notes = arrNotes

                if (user) {
                    user['notes'] = [...notes]
                    element[index] = { ...user } as never
                }

                localStorage.setItem('users', JSON.stringify(element))
                sessionStorage.setItem('users', JSON.stringify(user))
            }

        }
        handlerHiddenSidebar()
    }



    return <aside className=" right-0  h-full fixed bg-[#B49BE0] w-sm shadow-2xl z-10">
        <form className="w-full h-full flex flex-col justify-center items-center gap-4" onSubmit={handlerSubmit}>
            <div className="flex absolute right-10 top-20 gap-2">
                <MdClose
                    className="absolute right-0 top-[-2rem] text-white w-7 h-7 hover:cursor-pointer"
                    onClick={handlerHiddenSidebar} />
            </div>
            <input style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white w-[80%] rounded-lg h-9 focus:outline-none px-5 placeholder:text-xl text-gray-500"
                value={editNote.title} onChange={(e) => handlerChange('title', e.target.value)}></input>
            <textarea style={{ backgroundImage: `url(${backgroundImage})` }}
                className="bg-white w-[80%] rounded-lg h-[20rem] p-5 focus:outline-none placeholder:text-xl pt-4 text-gray-500 resize-none" value={editNote.description} onChange={(e) => handlerChange('description', e.target.value)}></textarea>
            <CarouselBackground handlerBackgroundImage={handlerBackgroundImage} />
            <div className="flex gap-6 justify-center w-full items-center text-white mt-4">
                <div className='flex items-center gap-2 bg-[#E2D2FE] px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#9c7cd4]'>
                    <Delete className="text-xl" />
                    <button className='hover:cursor-pointer' onClick={handlerDelete}>Borrar</button>
                </div>
                <div className='flex items-center gap-2 bg-[#E2D2FE] px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#9c7cd4]'>
                    <FaCheck className="text-xl" />
                    <button className='hover:cursor-pointer' type="submit">Guardar</button>
                </div>
            </div>
        </form>
    </aside>

}

export default Sidebar
