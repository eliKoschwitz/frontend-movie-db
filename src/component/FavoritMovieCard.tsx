import {Movie} from "./HomePage";


function FavoritMovieCard (props:{favMovie:Movie}) {

    return(
        <div>
            {props.favMovie.name}
            {props.favMovie.url}
            {props.favMovie.favorit}
        </div>
    )

}

export default FavoritMovieCard