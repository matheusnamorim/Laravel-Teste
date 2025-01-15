import Container from "../../styles/Container";
import ListUsers from "../ListUsers/ListUsers";
import { Wrapp, Header } from "../../styles/styles";

export default function HomePage() {
    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Lista de Usuários</h1>
                    </Header>
                    <ListUsers />
                    <Header>
                        <h1>Lista de Livros</h1>
                    </Header>
                </Wrapp>
            </Container>
        </>
    );
}