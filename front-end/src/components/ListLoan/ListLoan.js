import { useState, useEffect } from 'react';
import { listLoan, deleteLoanById } from "../services/laravel_teste";
import { Link } from "react-router-dom";
import ListContainer from "../../styles/ListContainer";
import { format } from 'date-fns';
import { BtnDelete, BtnEdit } from "../../styles/styles";
import { toast, ToastContainer } from 'react-toastify';

export default function ListLoan() {

    const [list, setList] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        listLoan()
            .then((data) => {
                setList(data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [reload]);

    function deleteLoan(id){
        if(window.confirm("Deseja realmente excluir esse Empréstimo?")){
            deleteLoanById(id).then((data) => {
                toast('Empréstimo excluído com sucesso!');
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
                            <th>Código Usuário</th>
                            <th>Nome de Usuário</th>
                            <th>Código Livro</th>
                            <th>Nome do Livro</th>
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
                                <td><p>{value.usuario.id}</p></td>
                                <td><p>{value.usuario.nome}</p></td>
                                <td><p>{value.livro.id}</p></td>
                                <td><p>{value.livro.titulo}</p></td>
                                <td><p>{value.situacao}</p></td>
                                <td><p>{format(new Date(value.created_at), 'dd/MM/yyyy HH:mm:ss')}</p></td>
                                <td><p>{format(new Date(value.updated_at), 'dd/MM/yyyy HH:mm:ss')}</p></td>
                                <td>
                                    <BtnEdit>
                                        <Link to={`/editLoan/${value.id}`} style={{ textDecoration: 'none' }}>
                                            Editar
                                        </Link>
                                    </BtnEdit>
                                </td>
                                <td><BtnDelete onClick={() => deleteLoan(value.id)}>Excluir</BtnDelete></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ListContainer>
        </>
    )
}