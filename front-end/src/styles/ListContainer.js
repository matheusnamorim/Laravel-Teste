import styled from 'styled-components';

export default function Container({children}){
    return <Wrapp >{children}</Wrapp>
}

const Wrapp = styled.div`
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #FFF;

    button {
        border-radius: 5px;
        height: 40px;
        min-width: 100px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 700;
        margin-left: 20px;
        color: #000;
    }
`;

