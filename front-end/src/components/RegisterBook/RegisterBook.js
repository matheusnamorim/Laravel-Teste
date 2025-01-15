import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { listUsers, registerBooks } from "../services/laravel_teste";
import { toast, ToastContainer } from 'react-toastify';

export default function RegisterBook() {

    const navigate = useNavigate();
    const [listAuthorEdit, setListAuthorEdit] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [status, setStatus] = useState('');
    const [yearOfPubli, setYearOfPubli] = useState('');

    useEffect(() => {
        listUsers()
            .then((data) => {
                setListAuthorEdit(data.data);
        }).catch((err) => {
            toast('Não foi possível concluir a operação!');
            console.log(err);
        });
    }, []);

    function register(event){

        event.preventDefault();
        if(title === '' || author === '' || gender === '' || synopsis === '' || status === '' || yearOfPubli === '') {
            return toast('Necessário preencher todos os campos!');
        }

        registerBooks({
            "titulo": title,
            "autor_id": 1, 
            "genero": gender, 
            "sinopse": synopsis, 
            "situacao": status,
            "ano_publicacao": yearOfPubli
            }).then((data) => {
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
                        <h1>Incluindo Livro</h1>
                    </Header>
                    <Form onSubmit={register} >
                        <div>
                            <p>Título:</p>
                            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <p>Autores:</p>
                            <select name="authors" value={author} onChange={(e) => setAuthor(e.target.value)}>
                                <option value=""></option>
                                {listAuthorEdit.length !== 0 ? listAuthorEdit.map((value, index) => <option key={index} value={value.id}>{value.id} - {value.nome} {value.sobrenome}</option>) : <></>}
                            </select>
                        </div>
                        <div>
                            <p>Gênero:</p>
                            <input type="text" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                        </div>
                        <div>
                            <p>Sinopse:</p>
                            <input type="text" name="synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)}/>
                        </div>
                        <div>
                            <p>Ano Publicação:</p>
                            <input type="text" name="yearOfPubli" value={yearOfPubli} onChange={(e) => setYearOfPubli(e.target.value)}/>
                        </div>
                        <div>
                            <p>Situação:</p>
                            <input type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)}/>
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