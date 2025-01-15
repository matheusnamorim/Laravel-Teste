import { useEffect, useState } from "react";
import { getAuthorByBookId } from "../services/laravel_teste";
import { toast, ToastContainer } from 'react-toastify';

export default function OptionAuthor({value, index, id, setAuthor}) {

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        getAuthorByBookId(id)
            .then((data) => {
                if (data.data.id == value.id) {
                    setSelected(true);
                    setAuthor(value.id);
                }
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }, []);
    
    return (
        <>
            <ToastContainer/>
            <option key={index} value={value.id} selected={selected} >{value.id} - {value.nome} {value.sobrenome}</option>
        </>
    );
}