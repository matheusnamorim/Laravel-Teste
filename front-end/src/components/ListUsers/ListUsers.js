import { useState, useEffect } from 'react';
import { listUsers } from "../services/laravel_teste";
import ListContainer from "../../styles/ListContainer";
import { format } from 'date-fns';

export default function ListUsers() {

    const [list, setList] = useState([]);

    useEffect(() => {
        listUsers()
            .then((data) => {
                setList(data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <ListContainer>
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
                                <td><p>Botão Editar</p></td>
                                <td><p>Botão Excluir</p></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </ListContainer>
        </>
    )
}