import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { HeroCard, SearchBtn } from "../components"
import { useForm } from "../hooks/useForm"
import { getHeroesbyName } from "../helpers";


export const SearchPage = () => {

  const navigate= useNavigate();
  const location= useLocation();

  const { q='' }= queryString.parse( location.search );

  const heroes= getHeroesbyName(q);

  const {searchText, onInputChange}=useForm({
    searchText:q
  });

  const showSearch= (q.length===0);
  const showError = (q.length > 0) && heroes.length===0;
  const onSearchSubmit=(e)=>{
    const search= searchText.trim();
    e.preventDefault();
    //if(search.length<=1) return;
    navigate(`?q=${search.toLowerCase()}`)
  }

  return (
    <>
      <h1>Buscar heroe</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <form 
            className="form-search"
            onSubmit={onSearchSubmit}
          >
            <input
              type="text"
              placeholder="Buscar heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btnc btn btn-outline-primary animate__animated">
              <SearchBtn />
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="alert alert-primary animate__animated animate__fadeInUp" style={{ display: showSearch? '': 'none' }}>
            Buscar un heroe
          </div>
          <div className="alert alert-danger animate__animated animate__fadeInDown" style={{ display: showError ? '' : 'none' }}>
            Sin resultados para <b>{ q }</b>
          </div>
          {
            heroes.map(hero=>(
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>

    </>
  )
}
