import Container from "../../styles/Container";
import styled from "styled-components";
import ListUsers from "../ListUsers/ListUsers";

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

const Wrapp = styled.div`
    min-height: 100vh;
    padding: 25px;
    display: flex;
    flex-direction: column;
    table{
        border: 1px solid #FFF;
        border-radius: 5px;
        width: 100%;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        thead, tbody, tr, td, th{
            padding: 20px;
            border: 1px solid #506266;
            height: 40px;
        }
        thead{
            font-size: 15px;
            font-weight: 700;
            color: #506266
        }
        tr, td{
            font-size: 15px;
            font-weight: 400;
            color: #506266;
        }
    }
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
	    font-weight: 700;
        font-size: 26px;
        margin-bottom: 0;
    }
`;