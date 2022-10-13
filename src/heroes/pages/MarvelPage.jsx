import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { alert } from "../../auth/helpers";
import { HeroesList} from "../components";


export const MarvelPage = () => {
  const location = useLocation();
  const payload={
    icon: 'error',
    title: 'Error:404',
    text:'Ups... parece que la busqueda no arrojo resultados'
  }
  alert(location.state,payload);
  
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroesList publisher='Marvel Comics' />
    </>
  )
}
