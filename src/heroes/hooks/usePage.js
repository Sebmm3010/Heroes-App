import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";


export const usePage = (id) => {
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id), [id]);

    const changeColor = (publi) => {
        let color = 'btn btn-outline-primary';
        if (publi === 'Marvel Comics') {
            color = 'btn btn-outline-danger';
        }
        return color;
    }
    const onNavigateBack = (publi) => {
        publi === 'DC Comics' ?
            navigate('/dc')
            : navigate('/marvel');
    }
    return{
        hero,
        changeColor,
        onNavigateBack
    }
}
