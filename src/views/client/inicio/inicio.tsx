import { SyntheticEvent, useEffect, useState } from "react"
import BtnOpenModal from "../../../components/btnOpenModal/btnOpenModal"
import FormAddNote from "../../../components/formAddNote/formAddNote"
import SearchInputReactPrime from "../../../components/searchInput/searchInput"
import { tpNote, tpValidateNote } from "../../../types/tpNote/tpNote"
import { setNote } from "../../../services/setNote"
import { useLocation } from "react-router-dom"
import CardNotes from "../../../components/cardNotes/cardNotes"
import CardWelcome from "../../../components/cardWelcome/cardWelcome"
import Sidebar from "../../../components/sidebar/sidebar"





const Inicio = () => {

    const location = useLocation();
    const { dataRegister } = location.state || {}
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const [notes, setNotes] = useState<tpNote[]>([]);

    const [newNote, setNewNote] = useState<tpNote>({
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
        const dataUser = localStorage.getItem('users')

        if (dataUser) {
            const dataNotesObj = JSON.parse(dataUser)
            console.log('las notas extraidas de la localSotrage',dataNotesObj)

            if (dataNotesObj.length > 0 ) {
                setNewNote(dataNotesObj[0]); 
            } else {
                console.log("No existe nota");
            }
        }

    }, [])


    const handlerAcept = (event: SyntheticEvent) => {
        event.preventDefault()

        const allInputsValid = Object.keys(validateNewNote).every((item: string) => {
            const key = item as keyof tpValidateNote;

            return validateNewNote[key];
        });


        if (allInputsValid) {
            setNote(dataRegister, newNote)
            setShowModal(false)
            setNotes((prev) => [...prev, newNote]);
        } else {
            console.log('No funciono')
        }
    }

    const handlerShowModal = () => {
        setShowModal(!showModal)
    }

    const handlerHiddenModal = () => {
        setShowModal(false)
    }

    const handlerShowSideBar = () => {
        setShowSidebar(!showSidebar)
    }

    const handlerHiddenSidebar = () => {
        setShowSidebar(false)
    }

    const handlerChange = (key: keyof tpNote, arg: string) => {
        setNewNote({ ...newNote, [key]: arg })

        if (arg.trim() !== '') {
            setValidateNewNote({ ...validateNewNote, [key]: true })

        } else {
            setValidateNewNote({ ...validateNewNote, [key]: false })

        }

        console.log(newNote)
    }

    


    return <div className="bg-[#E2D2FE] w-full h-full flex items-center justify-center relative">
        <SearchInputReactPrime />
        {showModal && <FormAddNote handlerChange={handlerChange} handlerHiddenModal={handlerHiddenModal} handlerAcept={handlerAcept} />}
        <div className="w-full flex justify-center flex-wrap">

             <div className="w-full flex justify-center">
                {notes.length === 0 ? <CardWelcome dataRegister={dataRegister}/> : null}
             </div>
            
            <div className="w-[85%] flex justify-start flex-wrap gap-8">
            {notes.map((item, index) => (
                <CardNotes key={index} newNote={item} handlerShowSideBar={handlerShowSideBar}/>
            ))}
            </div>
        </div>

        {showSidebar && <Sidebar newNote={newNote} handlerChange={handlerChange} handlerHiddenSidebar={handlerHiddenSidebar}/>}

        <BtnOpenModal handlerClick={handlerShowModal} />



    </div>
}


export default Inicio 