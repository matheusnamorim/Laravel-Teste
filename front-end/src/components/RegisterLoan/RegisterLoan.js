import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerLoan, listUsers, listBooks } from "../services/laravel_teste";
import { toast, ToastContainer } from 'react-toastify';

export default function RegisterLoan() {

    const navigate = useNavigate();
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
    }, []);

    function register(event){
        event.preventDefault();

        if(userId === '' || bookId === '' || status === '') {
            return toast('Necessário preencher todos os campos!');
        }

        registerLoan({
            "user_id": userId,
            "livro_id": bookId, 
            "situacao": status,
            "dtdevolucao": dtDev
            }).then((data) => {
                navigate('/');
        }).catch((err) => {
              console.log(err);
        });
    }

    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Incluindo Empréstimo</h1>
                    </Header>
                    <Form onSubmit={register} >
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
                        <button>Gravar</button>
                    </span>
                    </Form>
                </Wrapp>
                <ToastContainer/>
            </Container>
        </>
    );
}