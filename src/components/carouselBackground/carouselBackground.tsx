import { dataCarouselBackground } from "../../enums/dataCarouselBackground"
import { MdNavigateNext as Next } from "react-icons/md";
import { GrFormPrevious as Prev } from "react-icons/gr";
import { FC, useState } from "react";

interface CarouselBackgroundProps {
    handlerBackgroundImage: (arg:string)=>void
}


const CarouselBackground:FC<CarouselBackgroundProps> = ({handlerBackgroundImage}) => {

    const [index, setIndex] = useState<number>(0)
    const items: number = 3
    const maxIndex: number = dataCarouselBackground.length - items

    const handleNext = () => {
        setIndex(index + 1 <= maxIndex ? index + 1 : 0)
    }

    const handlePrev = () => {
        setIndex(index - 1 >= 0 ? index - 1 : maxIndex)
    }

    return  <div className="flex w-[100%] md:w-[80%] lg:w-full justify-between items-center">
            <Prev className="w-8 h-8 text-white hover:cursor-pointer" onClick={handlePrev} />
            <div className="flex space-x-2">
                {dataCarouselBackground.slice(index, index + items).map((arg: string, index: number) => (
                    <div
                        key={index}
                        className="bg-[#ffffff] bg-center bg-[length:100%_100%] w-16 h-16 rounded-lg hover:cursor-pointer transition-all duration-200"
                        style={{ backgroundImage: `url(${arg})` }}
                        onClick={() => handlerBackgroundImage(arg)}
                    ></div>
                ))}
            </div>
            <Next className="w-10 h-10 text-white hover:cursor-pointer" onClick={handleNext} />
        </div>
}

export default CarouselBackground