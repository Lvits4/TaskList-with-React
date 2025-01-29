import { SyntheticEvent,  useState } from "react"
import BtnOpenModal from "../../../components/btnOpenModal/btnOpenModal"
import FormAddNote from "../../../components/formAddNote/formAddNote"
import SearchInputReactPrime from "../../../components/searchInput/searchInput"
import { tpNote, tpValidateNote } from "../../../types/tpNote/tpNote"
import { setNote } from "../../../services/setNote"
import { useLocation } from "react-router-dom"




const Inicio = () => {

    const location = useLocation();
    const { dataRegister } = location.state || {}


    const [showModal, setShowModal] = useState<boolean>(false)

    const [newNote, setNewNote] = useState<tpNote>({
        title: '',
        description: '',
    })

    const [validateNewNote, setValidateNewNote] = useState<tpValidateNote>({
        title: false,
        description: false,
    })

    
    const handlerAcept = (event: SyntheticEvent) => {
        event.preventDefault()

        const allInputsValid = Object.keys(validateNewNote).every((item: string) => {
            const key = item as keyof tpValidateNote;

            return validateNewNote[key];
        });


        if (allInputsValid) {
            setNote(dataRegister, newNote)
            setShowModal(false)
        } else {
            console.log('No funciono')
        }

        console.log(dataRegister.notes)
    }

    const handlerClick = () => {
        setShowModal(!showModal)
    }

    const handlerChange = (key: keyof tpNote, arg: string) => {
        setNewNote({ ...newNote, [key]: arg })

        if (arg.trim() !== '') {
            setValidateNewNote({ ...validateNewNote, [key]: true })

        } else {
            setValidateNewNote({ ...validateNewNote, [key]: false })

        }
    }

    const handlerCancel = () => {
        setShowModal(false)
    }


    return <div className="bg-[#E2D2FE] w-full h-full flex items-center justify-center relative">
        <SearchInputReactPrime />
        {showModal && <FormAddNote handlerChange={handlerChange} handlerCancel={handlerCancel} handlerAcept={handlerAcept}/>}
        <div>
            {/* {dataRegister.notes.length === 0 ? <CardWelcome /> : null} */}
            {/* {dataRegister.notes.length !==0 ? <CardNotes newNote={newNote}/> : null} */}

        </div>

        <BtnOpenModal handlerClick={handlerClick} />
        {/* <Sidebar/> */}


    </div>
}


export default Inicio 