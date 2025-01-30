import { FC, useState } from "react"
import CarouselBackground from "../carouselBackground/carouselBackground"
import { tpNote } from "../../types/tpNote/tpNote";
import BtnGeneric from "../btnGeneric/btnGeneric";
import { MdClose } from "react-icons/md";


interface SidebarProps {
    handlerChange: (key: keyof tpNote, arg: string) => void
    newNote: tpNote
    handlerHiddenSidebar: ()=>void
}



const Sidebar: FC<SidebarProps> = ({ newNote, handlerChange, handlerHiddenSidebar }) => {

    const [backgroundImage, setBackgroundImage] = useState<string>('')

    const handlerBackgroundImage = (arg: string) => {
        setBackgroundImage(arg)
        handlerChange('background',arg)
    }

    return <aside className="absolute right-0 h-full bg-[#B49BE0] w-sm shadow-2xl z-10">
            <form className="w-full h-full flex flex-col justify-center items-center gap-4">
                <div className="flex absolute right-10 top-20 gap-2">
                    <MdClose className="absolute right-0 top-[-2rem] text-white w-7 h-7 hover:cursor-pointer"  onClick={handlerHiddenSidebar}/>
                </div>
                <input style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white w-[80%] rounded-lg h-9 focus:outline-none indent-5 placeholder:text-xl text-gray-500" value={newNote.title} onChange={(e) => handlerChange('title', e.target.value)}></input>
                <textarea style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white w-[80%] rounded-lg h-[20rem] focus:outline-none indent-5 placeholder:text-xl pt-4 text-gray-500 resize-none" value={newNote.description} onChange={(e) => handlerChange('description', e.target.value)}></textarea>
                <CarouselBackground handlerBackgroundImage={handlerBackgroundImage} />
                <div className="flex w-full justify-around items-center text-white mt-4">
                    <BtnGeneric label='Borrar'/>
                    <BtnGeneric label='Guardar'/>
                </div>
            </form>
        </aside>
    
}

export default Sidebar
