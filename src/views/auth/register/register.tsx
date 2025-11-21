import { InputText } from 'primereact/inputtext';
import InputPassword from '../../../components/inputPassword/inputPassword';
import { useState } from "react";
import { FormValues, tpDataRegister, tpValidateRegister } from "../../../types/tpDataRegister/tpDataRegister";
import { useNavigate } from 'react-router-dom';
import { setDataLocal } from '../../../services/setDataLocal';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';

// Esquema de validación con Yup
const schema = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('El formato del email no es válido').required('El email es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria')/* .min(6, 'La contraseña debe tener al menos 6 caracteres') */,
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), ''], 'Las contraseñas deben coincidir')
    .required('Confirma tu contraseña'),
}).required();


const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const dataRegister: tpDataRegister = {
            name: data.name,
            email: data.email,
            password: data.password,
            id: Math.random() * 100,
            notes: [],
        };

        if (setDataLocal('users', dataRegister, 'user')) {
            sessionStorage.setItem('users', JSON.stringify(dataRegister));
            toast.success('Usuario registrado!')
            navigate('/home/inicio');
        } else {
            console.log('No funcionó');
        }
    };

    const [dataRegister, setDataRegister] = useState<tpDataRegister>({
        name: '',
        email: '',
        password: '',
        id: Math.random() * 100,
        notes: []
    });

    const [validateRegister, setValidateRegister] = useState<tpValidateRegister>({
        name: false,
        email: false,
        password: false,
    });

    const handlerNavigate = (arg: string) => {
        navigate(arg);
    };

    const handlerChange = (key: keyof tpDataRegister, arg: string) => {
        setDataRegister({ ...dataRegister, [key]: arg });

        if (arg.trim() !== '') {
            setValidateRegister({ ...validateRegister, [key]: true });
        } else {
            setValidateRegister({ ...validateRegister, [key]: false });
        }
    };


    return (
        <form 
            className="bg-[#E2D2FE] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[27%] rounded-xl p-10 shadow-2xl flex flex-col items-center justify-center gap-1" 
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="text-3xl text-gray-500 w-full text-center mb-4">Sing up</h1>

            <div className="w-full">
                <InputText 
                    keyfilter="alpha" 
                    placeholder="Name" 
                    {...register('name')}
                    onChange={(e) => handlerChange('name', e.target.value)}
                    className={`bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none ${errors.name ? 'border-red-500 shadow-red-500 border-[1px]' : ''}`}
                />
                <p className="text-red-500 text-xs mt-2" style={{ minHeight: '20px' }}>{errors.name ? errors.name.message : ' '}</p>
            </div>

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

            <div className="w-full">
                <InputPassword 
                    placeholder='Confirm your password' 
                    classElement={`bg-white text-gray-500 rounded-lg h-10 p-2 w-full focus:outline-none ${errors.confirmPassword ? 'border-red-500 shadow-red-500 border-[1px]' : ''}`}
                    handlerChange={(arg) => {
                        setValue('confirmPassword', arg, { shouldValidate: true });
                        /* handlerChangeConfirmPassword(arg); */
                    }}
                />
                <p className="text-red-500 text-xs mt-2" style={{ minHeight: '20px' }}>{errors.confirmPassword ? errors.confirmPassword.message : ' '}</p>
            </div>

            <div className="flex items-center justify-between text-gray-500 text-sm gap-2 hover:cursor-pointer">
                <span>Do you already have an account?</span>
                <span className="text-blue-500 hover:text-blue-600" onClick={() => handlerNavigate('/login')}>Sing in here</span>
            </div>

            <button className='bg-[#9c7cd4] w-full mt-8 text-white px-8 py-2 rounded-lg hover:cursor-pointer transition-all duration-200 hover:bg-[#8669b8]'>
                Register
            </button>
        </form>
    );
};

export default Register;
