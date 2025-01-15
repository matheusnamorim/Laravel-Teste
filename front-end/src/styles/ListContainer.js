import styled from 'styled-components';

export default function Container({children}){
    return <Wrapp >{children}</Wrapp>
}

const Wrapp = styled.div`
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    background-color: #FFF;
`;