import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Movie} from "./HomePage";

function DetailedMovieCard(){
    const initialMovie : Movie ={
        id: "",
        name: "",
        url: "",
        publicationDate: "",
        favorit: false
    }

    const objId = useParams<{id : string}>();
    const [movie, setMovie] = useState<Movie>(initialMovie);
    console.log("huhu",objId);

    useEffect( () => {
        (async () => {
            const response = await axios.get("/api/movies/"+ objId.id);
            setMovie(response.data);
            console.log("hallo");
        })();
    }, [objId]);

    return(
        <div>
            hallo
            <p>
                {movie.id}
            </p>
            <p>
                {movie.name}
            </p>
            <p>
                {movie.publicationDate}
            </p>
            <p>
                {movie.favorit}
            </p>
        </div>
    )
}

export default DetailedMovieCard;