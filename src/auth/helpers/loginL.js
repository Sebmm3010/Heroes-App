import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const loginL = () => {
  
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Sebastian' );

    navigate(lastPath, {
      replace: true
    });
  }
  return {
    onLogin
  }
}
