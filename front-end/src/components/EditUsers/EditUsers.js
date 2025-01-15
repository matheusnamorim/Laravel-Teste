import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate, useParams } from "react-router-dom";
import { listUserById, updateUserById } from "../services/laravel_teste";
import { useEffect, useState } from "react";

export default function EditUser() {

    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState('');
    const [dtBirth, setDtBirth] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        listUserById(params.idUser)
            .then((data) => {
                const user = data.data;
                setName(user.nome);
                setDtBirth(user.dtnascimento);
                setEmail(user.email);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function edit(event){
        event.preventDefault();
        updateUserById({
            "nome": name,
            "dtnascimento": dtBirth, 
            "email": email, 
            }, params.idUser).then((data) => {
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
                        <h1>Editando Usuário {params.idUser}</h1>
                    </Header>
                    <Form onSubmit={edit} >
                        <div>
                            <p>Nome:</p>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <p>Dt Nascimento:</p>
                            <input type="date" name="dtBirth" value={dtBirth} onChange={(e) => setDtBirth(e.target.value)}/>
                        </div>
                        <div>
                            <p>Email:</p>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <span>
                        <button>Atualizar</button>
                    </span>
                    </Form>
                </Wrapp>
            </Container>
        </>
    );
}