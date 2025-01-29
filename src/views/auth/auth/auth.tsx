import { Outlet } from "react-router-dom"



const Auth = () => {
    return <div className="flex justify-center items-center w-screen h-full bg-center bg-[length:100%_120%]" style={{ backgroundImage: `url('/src/assets/book-5850392_1920.jpg')` }}>
        <div className="absolute inset-0 backdrop-blur-xs"></div>
        <div className="relative z-10">
            <Outlet />
        </div>
    </div>
}

export default Auth