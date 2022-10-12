import { Navigate, useParams } from "react-router-dom"
import { usePage } from "../hooks";


export const HeroPage = () => {

    const { id } = useParams();
    const { hero, onNavigateBack, changeColor }= usePage(id);
    if (!hero) {
        return <Navigate to="/marvel" state={{ alert: true }} />
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft animate__faster"
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
                    <li className="list-group-item"><b>Primera aparicion: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Personificado por:</h5>
                <p>{hero.characters}</p>

                <button
                    className={changeColor(hero.publisher)}
                    onClick={() => onNavigateBack(hero.publisher)}
                >
                    {hero.publisher}
                </button>
            </div>
        </div>
    )
}
