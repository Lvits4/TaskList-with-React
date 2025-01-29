import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const SearchInputReactPrime =()=> {
    return (
        <div className="flex gap-3 absolute top-8 left-8 ">
            <IconField iconPosition="left" className="flex items-center">
                <InputIcon className="pi pi-search text-gray-400 bg-slate-700"> </InputIcon>
                <InputText placeholder="Search"  className="indent-2 h-8 rounded-lg bg-white focus:outline-none text-gray-600"/>
            </IconField>
        </div>
    )
}

export default SearchInputReactPrime