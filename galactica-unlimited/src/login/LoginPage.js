import background from "./space.jpg";
import LoginForm from './login-form/LoginForm';

function LoginPage() {
    return (
        <div id="LoginPage" style={{backgroundImage: `url(${background})`}}>
            <br/> <br/> 
            <LoginForm/>
        </div>
    );
}

export default LoginPage;