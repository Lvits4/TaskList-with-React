import { FC } from "react"
import { tpNote } from "../../types/tpNote/tpNote"
import { CiMenuKebab as EditMenu } from "react-icons/ci";

interface CardNotesProps {
    newNote: tpNote
    handlerShowSideBar: ()=>void
}

const CardNotes:FC<CardNotesProps> = ({newNote, handlerShowSideBar}) =>{

    console.log(newNote)
    return <div style={{ backgroundImage: `url(${newNote.background})` }} className="bg-white rounded-lg w-[25.5rem] h-[13rem] p-4 flex flex-col text-wrap overflow-hidden text-ellipsis relative">
        <EditMenu className="absolute top-3 right-3 text-gray-600 w-5 h-5 hover:cursor-pointer" onClick={handlerShowSideBar}/>
        <h1 className="text-gray-500 text-2xl pb-2">{newNote.title}</h1>
        <hr className="text-gray-400"/>
        <p className="text-gray-500 text-sm pt-2">{newNote.description}</p>
    </div>
}


export default CardNotes