import React,{useRef,useEffect,useCallback} from 'react';
import {useSpring,animated} from 'react-spring'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import  ModalContent  from './ModalContent';


const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    z-index:999;
`;

const ModalWrapper = styled.div`
    width: 700px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #858585;
    color: #000;
    position: relative;
    z-index:999;
    border-radius: 10px;
`;

const CloseModalButton = styled(MdClose)`
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index:999;
`;


export const Modal = ({showModal,setShowModal}) => {
    const modalRef = useRef()

    const animation = useSpring({
        config:{
            duration:250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal= close => {
        if (modalRef.current === close.target){
            setShowModal(false);
        }
    };

    const keyPress = useCallback(close =>{
        if(close.key === 'Escape'  && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect( 
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);
    
    return (
    <>
    { showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent/>
                    <CloseModalButton 
                        aria-label='Close'
                        onClick={() => setShowModal(prev => !prev)}
                    />
                </ModalWrapper>
            </animated.div>
        </Background>
    ) : null}
    </>  
    );
};