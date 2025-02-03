import { FC } from "react"
import { CiMenuKebab as EditMenu } from "react-icons/ci";

interface CardNotesProps {
    id: number
    setShowSidebar: (showSidebar: boolean) => void
    title: string
    description: string
    background: string
    setSelectedId: (arg: number) => void
}



const CardNotes: FC<CardNotesProps> = ({
    id,
    title,
    background,
    description,
    setShowSidebar,
    setSelectedId }) => {

    const handlerShowSideBar = () => {
        setShowSidebar(true)
    }



    return <div
        style={{ backgroundImage: `url(${background})` }}
        onClick={()=>setSelectedId(id)}
        className="bg-white rounded-lg w-[31%] h-[13rem] p-4 flex flex-col text-wrap overflow-hidden text-ellipsis relative">
        <EditMenu className="absolute top-3 right-3 text-gray-600 w-5 h-5 hover:cursor-pointer" onClick={handlerShowSideBar} />
        <h1 className="text-gray-500 text-2xl pb-2">{title}</h1>
        <hr className="text-gray-400" />
        <p className="text-gray-500 text-sm pt-2">{description}</p>
    </div>
}


export default CardNotes