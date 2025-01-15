import { useState, useEffect } from 'react';
import { listUsers, deleteUserById } from "../services/laravel_teste";
import { Link } from "react-router-dom";
import ListContainer from "../../styles/ListContainer";
import { format } from 'date-fns';
import { BtnDelete, BtnEdit } from "../../styles/styles";
import { toast, ToastContainer } from 'react-toastify';

export default function ListUsers() {

    const [list, setList] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        listUsers()
            .then((data) => {
                setList(data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [reload]);

    function deleteAuthor(id){
        if(window.confirm("Deseja realmente excluir esse usuário?")){
            deleteUserById(id).then((data) => {
                toast('Autor excluído com sucesso!');
                setReload(!reload);
            }).catch((err) => {
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
                            <th>Nome Completo</th>
                            <th>Dt. Nascimento</th>
                            <th>Email</th>
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
                                <td><p>{value.nome} {value.sobrenome}</p></td>
                                <td><p>{format(new Date(value.dtnascimento), 'dd/MM/yyyy')}</p></td>
                                <td><p>{value.email}</p></td>
                                <td><p>{format(new Date(value.created_at), 'dd/MM/yyyy HH:mm:ss')}</p></td>
                                <td><p>{format(new Date(value.updated_at), 'dd/MM/yyyy HH:mm:ss')}</p></td>
                                <td>
                                    <BtnEdit>
                                        <Link to={`/editUser/${value.id}`} style={{ textDecoration: 'none' }}>
                                            Editar
                                        </Link>
                                    </BtnEdit>
                                </td>
                                <td><BtnDelete onClick={() => deleteAuthor(value.id)}>Excluir</BtnDelete></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ListContainer>
        </>
    )
}