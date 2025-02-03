import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { FC } from "react";

interface SearchInputReactPrimeProps {
    notes: Object[]
}

const SearchInputReactPrime:FC<SearchInputReactPrimeProps> =({notes})=> {


    const handlerChange = (arg:string)=>{

        console.log(arg,notes)
        /* const searchNotes = notes.filter((item: Partial <{title:string, description:string}>)=>
            item.title?.includes(arg) | item.description?.includes(arg)) */
    }

    return (
        <div className="flex gap-3 absolute top-8 left-8 ">
            <IconField iconPosition="left" className="flex items-center" onChange={(e)=>handlerChange(e.target.value)}>
                <InputIcon className="pi pi-search text-gray-400 bg-slate-700"> </InputIcon>
                <InputText placeholder="Search"  className="indent-2 h-8 rounded-lg bg-white focus:outline-none text-gray-600"/>
            </IconField>
        </div>
    )
}

export default SearchInputReactPrime