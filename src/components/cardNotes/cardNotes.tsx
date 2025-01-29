import { FC } from "react"
import { tpNote } from "../../types/tpNote/tpNote"

interface CardNotesProps {
    newNote: tpNote
}

const CardNotes:FC<CardNotesProps> = ({newNote}) =>{
    return <div className="bg-white rounded-lg w-[25rem] h-[13rem] p-4 flex flex-col text-wrap overflow-hidden text-ellipsis">
        <h1 className="text-gray-500 text-2xl pb-2">{newNote.title}</h1>
        <hr className="text-gray-400"/>
        <p className="text-gray-500 text-sm pt-2">{newNote.description}</p>
    </div>
}


export default CardNotes