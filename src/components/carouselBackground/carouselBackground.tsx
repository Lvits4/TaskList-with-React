import { dataCarouselBackground } from "../../enums/dataCarouselBackground"
import { MdNavigateNext as Next } from "react-icons/md";
import { GrFormPrevious as Prev } from "react-icons/gr";
import { FC } from "react";

interface CarouselBackgroundProps {
    handlerBackgroundImage: (arg:string)=>void
}


const CarouselBackground:FC<CarouselBackgroundProps> = ({handlerBackgroundImage}) => {
    return <div className="flex w-[100%] md:w-[80%] lg:w-full justify-between items-center">
        <Prev className="w-8 h-8 text-white hover:cursor-pointer"/>
        {dataCarouselBackground.map((arg: string, index: number) => {
            return <div key={index} className="bg-[#ffffff] bg-center bg-[length:100%_100%] w-16 h-16 rounded-lg hover:cursor-pointer" style={{ backgroundImage: `url(${arg})` }} onClick={()=>handlerBackgroundImage(arg)}></div>

        })}
        <Next className="w-10 h-10 text-white hover:cursor-pointer"/>

    </div>
}

export default CarouselBackground