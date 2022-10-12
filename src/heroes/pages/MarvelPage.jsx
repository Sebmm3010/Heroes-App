import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { HeroesList} from "../components";


export const MarvelPage = () => {
  const location = useLocation();
  let popAlert= false;
  if(location.state !== null){
    popAlert= location.state;
  }
  if(popAlert){
    useEffect(() => {
      Swal.fire({
        icon: 'error',
        title: 'Falla en la busqueda',
        text: 'Ups... parece que la busqueda no arrojo resultados',
      })
    }, []);
  }
  
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroesList publisher='Marvel Comics' />
    </>
  )
}
