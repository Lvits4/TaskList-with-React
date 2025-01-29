import { InputText } from 'primereact/inputtext';
import InputPassword from '../../../components/inputPassword/inputPassword';
import { SyntheticEvent, useState } from "react";
import { tpDataRegister, tpValidateRegister } from "../../../types/tpDataRegister/tpDataRegister";
import { setData } from "../../../services/setData";
import { tpNote } from "../../../types/tpNote/tpNote";
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate()


    const [dataRegister, setDataRegister] = useState<tpDataRegister>({
        name: '',
        email: '',
        password: '',
        id: Math.random(),
        notes: []
    })

    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const [validateConfirmPassword, setValidateConfirmPassword] = useState<boolean>(false)


    const [validateRegister, setValidateRegister] = useState<tpValidateRegister>({
        name: false,
        email: false,
        password: false,
    })

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const handlerChange = (key: keyof tpDataRegister, arg: string) => {
        setDataRegister({ ...dataRegister, [key]: arg })

        if (arg.trim() !== '') {
            setValidateRegister({ ...validateRegister, [key]: true })

        } else {
            setValidateRegister({ ...validateRegister, [key]: false })

        }
    }

    const handlerChangeConfirmPassword = (arg: string) => {
        setConfirmPassword(arg)

        if (arg.trim() !== '') {
            setValidateConfirmPassword(true)

        } else {
            setValidateConfirmPassword(false)

        }
    }

    const addNote = (newNote: tpNote) => {
        setDataRegister((prev: tpDataRegister) => ({
            ...prev,
            notes: [...prev.notes, newNote]
        }))
    }


    const handlerSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        const allInputsValid = Object.keys(validateRegister).every((item: string) => {
            const key = item as keyof tpValidateRegister;

            return validateRegister[key];
        });


        if (allInputsValid && validateConfirmPassword) {
            if (dataRegister.password === confirmPassword) {
                if (setData(dataRegister)) {
                    navigate('/home/inicio', { state: { dataRegister, addNote } })
                } else {
                    console.log('No funciono')
                }
            } else {
                console.log('Error, los passwords difieren')
            }
        } else {
            console.log('No funciono')
        }
    }


    return <form className="bg-[#E2D2FE] w-[25rem] rounded-xl p-10 shadow-2xl flex flex-col items-center justify-center gap-4" onSubmit={handlerSubmit}>
        <h1 className="text-3xl text-gray-500 w-full text-center mb-4">Sing up</h1>
        <InputText keyfilter="alpha" placeholder="Name" className='bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none' onChange={(e) => handlerChange('name', e.target.value)} />
        <InputText keyfilter="email" placeholder="Email" className='bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none' onChange={(e) => handlerChange('email', e.target.value)} />
        <InputPassword placeholder='Password' handlerChange={(arg) => handlerChange('password', arg)} />
        <InputPassword placeholder='Confirm your password' handlerChange={(arg) => handlerChangeConfirmPassword(arg)} />
        <div className="flex items-center justify-between text-gray-500 text-sm gap-2 hover:cursor-pointer">
            <span>Ya tienes cuenta?</span>
            <span className="text-blue-500 hover:text-blue-600" onClick={() => handlerNavigate('/login')}>Inicia sesión aquí</span>
        </div>
        <button className='bg-[#9c7cd4] w-full mt-8 text-gray-200 px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#8669b8]'>Register</button>

    </form>
}


export default Register