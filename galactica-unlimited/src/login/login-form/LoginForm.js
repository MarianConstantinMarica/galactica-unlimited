import './LoginForm.css';
import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
import logo from './icon_darkbg.png';

function LoginForm() {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol sm='4' style={{backgroundColor: '#006989'}}>
                    <div className='d-flex flex-row ps-5 pt-5' style={{alignContent: 'center'}}>
                        <img src={logo} width="150" height="150"/> 
                    </div>
                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: '#00ffe7' }}>Log in</h3>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" />
                        <MDBBtn className="mb-4 px-5 mx-5 w-100" size='lg' style={{backgroundColor: '#edff7a', color: 'black'}}>Login</MDBBtn>
                        <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
                        <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default LoginForm;