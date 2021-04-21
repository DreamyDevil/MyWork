import React from 'react'
import styled from 'styled-components'
import SignImg from './LogInM.jpg'
import RegImg from './CreateNew.jpg'
import './ModalStyle.css'

const ModalUserSign = styled.div`
    color: #141414;
    //border:1px solid blue;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    
`;

const ModalUserReg = styled.div`
    color: #141414;
    border:1px solid blue;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:none;
    input[type='submit']{
    background: coral;
    
}
`;

const ImgSign1 = styled.img`
     width:50%;
    height:100%;
    border-radius:10px 0 0 10px;
    //transition:0.5;
    position:relative;
    object-fit:cover;
    
`;

const ImgSign2 = styled.img`
     width:50%;
    height:100%;
    border-radius:10px 0 0 10px;
    //transition:0.5;
    position:relative;
    object-fit:cover;
    top:-100%;
`;



function ModalContent() {
    
    return (
        <>
            <ModalUserSign>
                <ImgSign1 src={SignImg}/>
                <div className='formBxSign'>
                    <form>
                        <h2 className='textSign'>Sign Up</h2>
                        <input type='text' className='textmodal' placeholder='Username'/>
                        <input type='password' className='passwordmodal' placeholder='Password'/>
                        <input id='modalinput' className='submitmodal' type='submit' value='Login'/>
                        <p className='signup'>don't have an account?<a href='#'  className='asign'>Sign up</a></p>
                    </form>
                </div>
            </ModalUserSign>
            <ModalUserReg>
                <ImgSign2 src={RegImg}/>
                <div className='formBxReg'>
                    <form>
                        <h2 className='textSign'>Create an account</h2>
                        <input type='text' placeholder='Username'/>
                        <input type='text' placeholder='Email Address'/>
                        <input type='password' placeholder='Create Password'/>
                        <input type='password' placeholder='Confirm Password'/>
                        <input type='submit' value='Sign Up'/>
                        <p className='signup'>Already have an account?<a href='#' onClick={ModalContent} className='asign'>Sign in</a></p>
                    </form>
                </div>
                
            </ModalUserReg>
            
        </>
    );    
};

export default ModalContent;
