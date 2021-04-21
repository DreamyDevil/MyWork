import React,{useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { Modal } from './Modal';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:20px;
    right:30px;
    `;

const Button = styled.div`
    min-width: 60px;
    cursor: pointer;
    color: #737272;
    font-weight:600;
    border: none;
    font-size: 18px;
    font-family: Roboto,Verdana,sans-serif;
    white-space:normal;

    a:hover{
        color:#ff6000;
    }
`;

function SignUp() {
    const [showModal,setShowModal] = useState(false)
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <div>
            <Container>
                <Button onClick={openModal}><a>Sign In</a></Button>
                <Modal showModal={showModal} setShowModal={setShowModal}/>
                <GlobalStyle/>
            </Container>
            
        </div>
    );
}

export default SignUp;
