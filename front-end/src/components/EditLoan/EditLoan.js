import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { listUsers, listBooks, listLoanById, updateLoanById } from "../services/laravel_teste";

export default function EditLoan() {

    const navigate = useNavigate();
    const params = useParams();
    const [listUser, setListUser] = useState([]);
    const [listBook, setListBook] = useState([]);
    const [userId, setUserId] = useState('');
    const [bookId, setBookId] = useState('');
    const [status, setStatus] = useState('');
    const [dtDev, setDtDev] = useState('');

    useEffect(() => {
        listUsers()
            .then((data) => {
                setListUser(data.data);
        }).catch((error) => {
            toast('Não foi possível concluir a operação!');
            console.log(error);
        });

        listBooks()
            .then((data) => {
                setListBook(data.data);
        }).catch((error) => {
            toast('Não foi possível concluir a operação!');
            console.log(error);
        });

        listLoanById(params.idLoan)
            .then((data) => {
                const loan = data.data;
                setUserId(loan.user_id);
                setBookId(loan.livro_id);
                setStatus(loan.situacao);
                setDtDev(loan.dtdevolucao);
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }, []);

    function edit(event){
        event.preventDefault();

        if(userId === '' || bookId === '' || status === '' || dtDev === '') {
            return toast('Necessário preencher todos os campos!');
        }

        updateLoanById({
            "user_id": userId,
            "livro_id": bookId, 
            "situacao": status, 
            "dtdevolucao": dtDev, 
            }, params.idLoan).then((data) => {
                navigate('/');
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }

    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Editando Empréstimo {params.idLoan}</h1>
                    </Header>
                    <Form onSubmit={edit} >
                        <div>
                            <p>Usuário:</p>
                            <select name="userId" value={userId} onChange={(e) => setUserId(e.target.value)}>
                                <option value=""></option>
                                {listUser.length !== 0 ? listUser.map((val) => <option value={val.id}>{val.id} - {val.nome}</option>) : <></>}
                            </select>
                        </div>
                        <div>
                            <p>Livro:</p>
                            <select name="bookId" value={bookId} onChange={(e) => setBookId(e.target.value)}>
                                <option value=""></option>
                                {listBook.length !== 0 ? listBook.map((val) => <option value={val.id}>{val.id} - {val.titulo}</option>) : <></>}
                            </select>
                        </div>
                        <div>
                            <p>Situação:</p>
                            <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value=""></option>
                                <option value="Atrasado">Atrasado</option>
                                <option value="Devolvido">Devolvido</option>
                                <option value="Em Aberto">Em Aberto</option>
                            </select>
                        </div>
                        <div>
                            <p>Data de Devolução:</p>
                            <input type="date" name="dtDev" value={dtDev} onChange={(e) => setDtDev(e.target.value)}/>
                        </div>
                        <span>
                        <button>Atualizar</button>
                    </span>
                    </Form>
                </Wrapp>
                <ToastContainer/>
            </Container>
        </>
    );
}