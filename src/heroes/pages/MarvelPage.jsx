import { useLocation } from "react-router-dom";
import { HeroesList } from "../components";


export const MarvelPage = () => {
  const location = useLocation();
  
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroesList publisher='Marvel Comics' />
    </>
  )
}
