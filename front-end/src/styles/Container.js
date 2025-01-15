import styled from 'styled-components';

export default function Container({children}){
    return <Wrapp >{children}</Wrapp>
}

const Wrapp = styled.div`
    height: 100%;
    width: 100%;
    background-color: #98c7b0;
`;