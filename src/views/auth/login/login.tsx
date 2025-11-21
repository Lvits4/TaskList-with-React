import { InputText } from 'primereact/inputtext';
import InputPassword from '../../../components/inputPassword/inputPassword';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FormValues, tpDataLogin, tpValidateLogin } from '../../../types/tpDataLogin/tpDataLogin';
import { authUser } from '../../../services/authUser';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

// Esquema de validación con Yup
const schema = yup.object({
  email: yup.string().email('El formato del email no es válido').required('El email es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria')/* .min(6, 'La contraseña debe tener al menos 6 caracteres') */,
}).required()


const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const dataLogin: tpDataLogin = {
            email: data.email,
            password: data.password,
        };

        if (authUser('users', dataLogin)){
            navigate('/home/inicio');  
            toast.success("Inicio de sesión exitosamente.")      
        } else {
            toast.error("Usuario y contraseña incorrecto.")
            console.log('No funcionó');
        }


    }

    const [dataLogin, setDataLogin] = useState<tpDataLogin>({
        email: '',
        password: '',
    })

    const [validateLogin, setValidateLogin] = useState<tpValidateLogin>({
        email: false,
        password: false
    })

    const handlerNavigate = (arg: string) => {
        navigate(arg);
    }

    const handlerChange = (key: keyof tpDataLogin, arg: string) => {
        setDataLogin({ ...dataLogin, [key]: arg });

        if (arg.trim() !== '') {
            setValidateLogin({ ...validateLogin, [key]: true });
        } else {
            setValidateLogin({ ...validateLogin, [key]: false });
        }
    }




    return (
        <form 
            className="bg-[#E2D2FE] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[27%] rounded-xl p-10 shadow-2xl flex flex-col items-center justify-center gap-1" 
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="text-3xl text-gray-500 w-full text-center mb-4">Sing in</h1>

            <div className="w-full">
                <InputText 
                    keyfilter="email" 
                    placeholder="Email" 
                    {...register('email')}
                    onChange={(e) => handlerChange('email', e.target.value)}
                    className={`bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none ${errors.email ? 'border-red-500 shadow-red-500 border-[1px]' : ''}`}
                />
                <p className="text-red-500 text-xs mt-2" style={{ minHeight: '20px' }}>{errors.email ? errors.email.message : ' '}</p>
            </div>

            <div className="w-full">
                <InputPassword 
                    placeholder='Password' 
                    classElement={`bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none ${errors.password ? 'border-red-500 shadow-red-500 border-[1px]' : ''}`}
                    handlerChange={(arg) => {
                        setValue('password', arg, { shouldValidate: true });
                        handlerChange('password', arg);
                    }}
                />
                <p className="text-red-500 text-xs mt-2" style={{ minHeight: '20px' }}>{errors.password ? errors.password.message : ' '}</p>
            </div>

            <div className="flex items-center justify-between text-gray-500 text-sm gap-2 hover:cursor-pointer">
                <span>Do not have an account?</span>
                <span className="text-blue-500 hover:text-blue-600" onClick={() => handlerNavigate('/register')}>Sing up here</span>
            </div>

            <button className='bg-[#9c7cd4] w-full mt-8 text-white px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#8669b8]'>
                Login
            </button>
        </form>
    );
};

export default Login;
