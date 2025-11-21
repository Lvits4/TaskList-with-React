import { FC } from "react";

interface CardWelcomeProps{
  nameUser: string
}


const CardWelcome:FC<CardWelcomeProps> = ({nameUser}) => {
  return (
    <div className="bg-white w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-[20rem] rounded-xl flex relative items-center p-4">
      <img
        src="src/assets/rb_2149718766.png"
        className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] absolute right-[-2.5rem] top-[-5.5rem]"
      ></img>
      <div className="flex flex-col indent-8">
        <h1 className="text-gray-400 text-5xl">Hello,</h1>
        <h1 className="text-gray-400 text-5xl">{nameUser}!</h1>
      </div>
    </div>
  );
};

export default CardWelcome;
