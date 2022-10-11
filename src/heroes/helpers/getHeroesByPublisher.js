import { heroes } from "../data/heroes"


export const getHeroesByPublisher = ( publisher ) => {
    const validate = ['DC Comics', 'Marvel Comics'];

    if( !validate.includes(publisher) ){
        throw new Error( `${publisher} no es valido para esta busqueda` );
    }

    return heroes.filter( hero=> hero.publisher===publisher );
}
