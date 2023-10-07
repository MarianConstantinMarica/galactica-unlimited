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
                    <center>
                        <img src={logo} width="150" height="150"/> 
                    </center>
                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                        <h3 className="fw-normal mb-1 ps-5 pb-3" style={{ letterSpacing: '1px', color: '#00ffe7'}}>Log in</h3>
                        <MDBInput wrapperClass='mb-1 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="md" />
                        <MDBInput wrapperClass='mb-1 mx-5 w-100' label='Password' id='formControlLg' type='password' size="md" />
                        <p className="small mb-3 pb-lg-3 ms-5"><a class="text-muted" href="#!" style={{colorAdjust: '#00ffe7'}}>Forgot password?</a></p>
                        <MDBBtn className="mb-3 px-5 mx-5 w-100" size='md' style={{backgroundColor: '#edff7a', color: 'black'}}>LOG IN</MDBBtn>
                        <MDBBtn className="mb-5 px-5 mx-5 w-100" size='md' style={{backgroundColor: 'transparent', borderColor: '#00ffe7', color: '#00ffe7'}}>CREATE ACCOUNT</MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default LoginForm;