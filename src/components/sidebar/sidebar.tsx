import { useState } from "react"
import CarouselBackground from "../carouselBackground/carouselBackground"
import FormAddNote from "../formAddNote/formAddNote"
import { MdDeleteOutline as Delete } from "react-icons/md";
import { IoCheckmarkSharp  as Save} from "react-icons/io5";


const Sidebar = () => {

    const [backgroundImage, setBackgroundImage] = useState<string>('')

    const handlerBackgroundImage = (url:string)=>{
        setBackgroundImage(url)
    }


    return (
        <div className="absolute right-0 h-full bg-[#B49BE0] w-sm shadow-2xl">
            <form className="w-full h-full flex flex-col justify-center items-center gap-4">
                <div className="flex absolute right-10 top-20 gap-2">
                    <Delete className="w-6 h-6 text-red-800 hover:cursor-pointer"/>
                    <Save className="w-6 h-6 text-blue-600 hover:cursor-pointer"/>
                </div>
                <input style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white w-[80%] rounded-lg h-9 focus:outline-none indent-5 placeholder:text-xl text-gray-500"></input>
                <textarea style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-white w-[80%] rounded-lg h-[20rem] focus:outline-none indent-5 placeholder:text-xl pt-4 text-gray-500 resize-none"></textarea>
                <CarouselBackground handlerBackgroundImage={handlerBackgroundImage}/>
                
            </form>
        </div>
    )
}

export default Sidebar
