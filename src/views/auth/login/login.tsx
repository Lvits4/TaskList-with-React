import { InputText } from 'primereact/inputtext';
import InputPassword from '../../../components/inputPassword/inputPassword';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';
import { tpDataLogin, tpValidateLogin } from '../../../types/tpDataLogin/tpDataLogin';
import { authUser } from '../../../services/authUser';



const Login = () => {

    const navigate = useNavigate()


    const [dataLogin, setDataLogin] = useState<tpDataLogin>({
        email: '',
        password: '',
    })

    const [validateLogin, setValidateLogin] = useState<tpValidateLogin>({
        email: false,
        password: false
    })

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const handlerChange = (key: keyof tpDataLogin, arg: string) => {
        setDataLogin({ ...dataLogin, [key]: arg })

        if (arg.trim() !== '') {
            setValidateLogin({ ...validateLogin, [key]: true })
        } else {
            setValidateLogin({ ...validateLogin, [key]: false })
        }
    }

    const handlerSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        const allInputsValidate = Object.keys(validateLogin).every((item: string) => {
            const key = item as keyof tpValidateLogin

            return validateLogin[key]
        })

        if (allInputsValidate) {
            if (authUser('users', dataLogin)){
                navigate('/home/inicio');        
            } else {
                console.log('No funciono hhhhhh')
            }
        } else {
            console.log('No funciono')
        }
    }

    return <form className="bg-[#E2D2FE] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[27%] rounded-xl p-10 shadow-2xl flex flex-col items-center justify-center gap-4" onSubmit={handlerSubmit}>
        <h1 className="text-3xl text-gray-500 w-full text-center mb-4">Welcome to Task List</h1>
        <InputText keyfilter="email" placeholder="Email" className='bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none' onChange={(e) => handlerChange('email', e.target.value)} />
        <InputPassword placeholder='Password' handlerChange={(arg) => handlerChange('password', arg)} />
        <div className="flex items-center justify-between text-gray-500 text-sm gap-2 hover:cursor-pointer">
            <span>Ya tienes cuenta?</span>
            <span className="text-blue-500 hover:text-blue-600" onClick={() => handlerNavigate('/register')}>Regístrate aquí</span>
        </div>
        <button className='bg-[#9c7cd4] w-full mt-8 text-white px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#8669b8]'>Login</button>

    </form>
}


export default Login