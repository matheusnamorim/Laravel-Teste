import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { format } from 'date-fns';
import { deleteBookById, listBooks } from "../services/laravel_teste";
import ListContainer from "../../styles/ListContainer";
import { BtnDelete, BtnEdit } from "../../styles/styles";

export default function ListBooks() {

    const [list, setList] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        listBooks()
            .then((data) => {
                setList(data.data);
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }, [reload]);

    function deleteBook(id){
        if(window.confirm("Deseja realmente excluir esse livro?")){
            deleteBookById(id).then((data) => {
                toast('Livro excluído com sucesso!');
                setReload(!reload);
            }).catch((err) => {
                toast('Não foi possível concluir a operação!');
                console.log(err);
            });
        }
    }

    return (
        <>
            <ListContainer>
                <ToastContainer/>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Gênero</th>
                            <th>Sinopse</th>
                            <th>Ano Publicação</th>
                            <th>Situação</th>
                            <th>Dh. Criação</th>
                            <th>Dh. Atualização</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((value, index) => 
                            <tr key={index}>
                                <td><p>{value.id}</p></td>
                                <td><p>{value.titulo}</p></td>
                                <td><p>{value.autores.nome} {value.autores.sobrenome}</p></td>
                                <td><p>{value.genero}</p></td>
                                <td><p>{value.sinopse}</p></td>
                                <td><p>{value.ano_publicacao}</p></td>
                                <td><p>{value.situacao}</p></td>
                                <td><p>{format(new Date(value.created_at), 'dd/MM/yyyy HH:mm:ss')}</p></td>
                                <td><p>{format(new Date(value.updated_at), 'dd/MM/yyyy HH:mm:ss')}</p></td>
                                <td>
                                    <BtnEdit>
                                        <Link to={`/editBook/${value.id}`} style={{ textDecoration: 'none' }}>
                                            Editar
                                        </Link>
                                    </BtnEdit>
                                </td>
                                <td><BtnDelete onClick={() => deleteBook(value.id)}>Excluir</BtnDelete></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ListContainer>
        </>
    )
}