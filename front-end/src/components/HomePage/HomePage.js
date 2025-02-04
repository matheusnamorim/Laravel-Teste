import Container from "../../styles/Container";
import ListUsers from "../ListUsers/ListUsers";
import { Wrapp, Header, FakeDiv, BtnEdit } from "../../styles/styles";
import { Link } from "react-router-dom";
import ListBooks from "../ListBooks/ListBooks";
import ListLoan from "../ListLoan/ListLoan";

export default function HomePage() {
    return (
        <>
            <Container>
                <Wrapp>
                    <Header>
                        <h1>Lista de Usuários</h1>
                    </Header>
                    <ListUsers />
                    <FakeDiv>
                        <BtnEdit>
                            <Link to={`/registerUsers`} style={{ textDecoration: 'none' }}>
                                Incluir
                            </Link>
                        </BtnEdit>
                    </FakeDiv>
                    <Header>
                        <h1>Lista de Livros</h1>
                    </Header>
                    <ListBooks />
                    <FakeDiv>
                        <BtnEdit>
                            <Link to={`/registerBook`} style={{ textDecoration: 'none' }}>
                                Incluir
                            </Link>
                        </BtnEdit>
                    </FakeDiv>
                    <Header>
                        <h1>Lista de Empréstimos</h1>
                    </Header>
                    <ListLoan />
                    <FakeDiv>
                        <BtnEdit>
                            <Link to={`/registerLoan`} style={{ textDecoration: 'none' }}>
                                Incluir
                            </Link>
                        </BtnEdit>
                    </FakeDiv>
                </Wrapp>
            </Container>
        </>
    );
}