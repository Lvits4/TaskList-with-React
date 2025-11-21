import { useEffect, useState } from "react"
import BtnOpenModal from "../../../components/btnOpenModal/btnOpenModal"
import FormAddNote from "../../../components/formAddNote/formAddNote"
import SearchInputReactPrime from "../../../components/searchInput/searchInput"
import { tpNote, tpValidateNote } from "../../../types/tpNote/tpNote"
import CardNotes from "../../../components/cardNotes/cardNotes"
import CardWelcome from "../../../components/cardWelcome/cardWelcome"
import Sidebar from "../../../components/sidebar/sidebar"
import { getDataSession } from "../../../services/getDataSession"


const Inicio = () => {


    const [showModal, setShowModal] = useState<boolean>(false)
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const [nameUser, setNameUser] = useState<string>('')
    const [notes, setNotes] = useState<tpNote[]>([])
    const [notesFilter, setNotesFilter] = useState<any>([])
    const [editNote, setEditNote] = useState<tpNote>({
        id: 0,
        title: '',
        description: '',
        background: ''
    })

    const [validateNewNote, setValidateNewNote] = useState<tpValidateNote>({
        title: false,
        description: false,
        
    })



    useEffect(() => {
        const data = getDataSession('users') as unknown as Partial<{ notes: [], name: string }>
        let arrNotes: [] = []
        let nameUser: string = ''

        if (data) {
            arrNotes = data.notes ?? []
            nameUser = data.name ?? ''
            setNameUser(nameUser)
            arrNotes ? setNotes(arrNotes) : null
        } else {
            console.log("No hay notas válidas en el arreglo.");
        }

        setNotesFilter(notes)

    }, [notes.length, showModal, showSidebar])


    const filterNotes = (id: number) => {
        const item = notes.find((item: Partial<{ id: number }>) => item.id === id)
        item ? setEditNote(item) : null
    }

    return <div className="bg-[#E2D2FE] w-full h-full flex items-center justify-center relative overflow-y-auto">
        <SearchInputReactPrime notes={notes} setNotesFilter={setNotesFilter}/>
        {showModal && <FormAddNote
            validateNewNote={validateNewNote}
            setValidateNewNote={setValidateNewNote}
            setShowModal={setShowModal} />}
        <div className="w-full flex justify-center flex-wrap">

            <div className="w-full flex justify-center">
                {notes?.length === 0 ? <CardWelcome nameUser={nameUser} /> : null}
            </div>

            <div className="flex w-full px-8 justify-center absolute top-25 pb-7 flex-wrap gap-8">
                {notesFilter.map((item:any) => {

                    const { id } = item
                    return <CardNotes
                        setSelectedId={(arg) => filterNotes(arg)}
                        key={id}
                        id={id}
                        title={item.title}
                        description={item.description}
                        background={item.background}
                        setShowSidebar={setShowSidebar} />
                })}
            </div>
        </div>

        {showSidebar && <Sidebar
            notes={notes}
            editNote={editNote}
            setEditNote={setEditNote}
            setShowSidebar={setShowSidebar} />}

        <BtnOpenModal showModal={showModal} setShowModal={setShowModal} />



    </div>
}


export default Inicio 