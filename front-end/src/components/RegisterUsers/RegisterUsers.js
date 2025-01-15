import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { Wrapp, Header } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUsers } from "../services/laravel_teste";

export default function RegisterUsers() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dtBirth, setDtBirth] = useState('');
    const [email, setEmail] = useState('');

    function register(event){
        event.preventDefault();
        registerUsers({
            "nome": name,
            "dtnascimento": dtBirth, 
            "email": email, 
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
                        <h1>Incluindo Usuário</h1>
                    </Header>
                    <Form onSubmit={register} >
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
                        <button>Gravar</button>
                    </span>
                    </Form>
                </Wrapp>
            </Container>
        </>
    );
}