import { FC } from "react";
import { tpDataRegister } from "../../types/tpDataRegister/tpDataRegister";

interface CardWelcomeProps{
  dataRegister: tpDataRegister
}


const CardWelcome:FC<CardWelcomeProps> = ({dataRegister}) => {
  return (
    <div className="bg-white w-[35rem] h-[20rem] rounded-xl flex relative items-center p-4">
      <img
        src="src/assets/rb_2149718766.png"
        className="w-[20rem] h-[20rem] absolute right-[-2.5rem] top-[-5.5rem]"
      ></img>
      <div className="flex flex-col indent-8">
        <h1 className="text-gray-400 text-5xl">Hello,</h1>
        <h1 className="text-gray-400 text-5xl">{dataRegister.name}!</h1>
      </div>
    </div>
  );
};

export default CardWelcome;
