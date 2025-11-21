import { InputText } from "primereact/inputtext";
import { ChangeEventHandler, FC, FocusEventHandler } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputReactPrimeProps {
    notes: Object[];
    setNotesFilter: (arg: any) => void;
}

const SearchInputReactPrime: FC<SearchInputReactPrimeProps> = ({ notes, setNotesFilter }) => {

    const handlerChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const arg = e.target.value
        const searchNotes = notes.filter((item: Partial<{ title: string }>) => item.title?.includes(arg));
        searchNotes ? setNotesFilter(searchNotes) : null;
    };

    const handlerInput: FocusEventHandler<HTMLInputElement> = (e) => {
        const valueInput = e.target.value.trim();
        if (!valueInput) {
            setNotesFilter(notes);
        }
    };

    return (
        <div className="flex gap-3 absolute top-8 left-8">
            <div className="bg-white rounded-lg flex items-center icon-left" >
                <InputText placeholder="Search" className="indent-2 h-8 rounded-lg bg-white focus:outline-none text-gray-600" onBlur={handlerInput} onChange={handlerChange}/>
                <CiSearch className="text-gray-400 w-5 h-5 mr-3"/>
            </div>
        </div>
    );
};

export default SearchInputReactPrime;
