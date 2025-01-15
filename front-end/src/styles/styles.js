import styled from "styled-components";

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

const BtnEdit = styled.button`
    background-color: #f0f0d8;
`;

const BtnDelete = styled.button`
    background-color: #9a171c;
`;

const FakeDiv = styled.div`
    margin: 10px 0;
    padding: 10px;
    align-self: end;
`;

export { Wrapp, Header, BtnEdit, BtnDelete, FakeDiv };
