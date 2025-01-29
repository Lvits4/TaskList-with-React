import FormAddNote from "../formAddNote/formAddNote"



const Modal = ()=>{
    return <div className="w-screen h-full bg-[#E2D2FE] opacity-90 z-10 flex items-center justify-center fixed">
       <FormAddNote/>
    </div>
}


export default Modal