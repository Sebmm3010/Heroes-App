import { useNavigate } from "react-router-dom";

export const loginL = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }
  return {
    onLogin
  }
}
