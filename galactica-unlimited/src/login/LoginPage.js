import background from "./space.jpg";
import MenuBar from './menu-bar/MenuBar';
import LoginForm from './login-form/LoginForm';

function LoginPage() {
    return (
        <div id="LoginPage" style={{backgroundImage: `url(${background})`}}>
            <MenuBar/>
            <br/> <br/>
            <LoginForm/>
        </div>
    );
}

export default LoginPage;