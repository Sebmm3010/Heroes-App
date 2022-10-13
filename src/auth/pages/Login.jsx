import { useLocation } from 'react-router-dom';
import { alert, loginL } from '../helpers';


export const Login = () => {

  const location=useLocation();
  const payload = {
    icon: 'error',
    title: 'Error: 401',
    text: 'Porfavor registrece antes de entrar'
  }
  alert(location.state, payload);
  
  const { onLogin }= loginL();

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
      className="btn btn-primary"
      onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
