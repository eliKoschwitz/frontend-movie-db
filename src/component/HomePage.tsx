import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieCardList from "./MovieCardList";
import "./homePage.css";

export type Movie = {
    id: string;
    name: string;
    url: string;
    publicationDate: string;
    favorit: boolean;
}

function HomePage() {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [inputForFilter, setInputForFilter] = useState<string>("");
    const [inputForTitle, setInputForTitle] = useState<string>("");
    const [inputForUrl, setInputForUrl] = useState<string>("");
    const [inputForYear, setInputForYear] = useState<string>("");


    if(JSON.stringify(movieList) === JSON.stringify([])){
        const movieCard ={
            id: "1",
            name: "Gibt keine Filme",
            url: "http://2.bp.blogspot.com/_YFbXKOW1NoQ/SBt21Y1HWII/AAAAAAAABKI/IQ9DqGc5Hn8/s1600/no+movies+in+the+first+four+months+of+the+year+sign.jpg",
            publicationDate: "0",
            favorit: false
        }
        movieList.push(movieCard);
    }

    // get with axios
    useEffect( () => {
        (async () => {
             const response = await axios.get("/api/movies");
             setMovieList(response.data);
        })();
        }, []);

    const getInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputForFilter(value);
    }

    const getInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputForTitle(value);
    }
    const getInputUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputForUrl(value);
    }
    const getInputYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputForYear(value);
    }
    // post Add
    const movieToSendInPost = {
        id: "",
        name: inputForTitle,
        url: inputForUrl,
        publicationDate:inputForYear
    }

    const addMovie = () => {
        (async () => {
            const response = await axios.post("/api/movies", movieToSendInPost);
            setMovieList(response.data);
        })();
    }

    // delete
    const deleteById = (id:string) => {
        (async () => {
            const response = await axios.delete("/api/movies/"+id);
            setMovieList(response.data);
        })();
    }

    // put
    const movieToSendInPut = {
        favorit: false
    }

    const setFavoritById = (id:string) => {
        movieToSendInPut.favorit = movieToSendInPut.favorit!;
        (async () => {
            const response = await axios.put("/api/movies/"+id, movieToSendInPut);
            response.data.favorit;
            //setMovieList(response.data);
        })();
    }

    return (
        <div className="background">
            <div className="header">
                <h3 className="headerTitle">Movie-DB</h3>
                <input className="inputForMovieSearch" onChange={getInput}/>
            </div>
            <div className="movieGallery">
                <MovieCardList movieCardList = {movieList} inputForFilter = {inputForFilter} deleteById={deleteById} setFavoritById={setFavoritById}/>
            </div>
            <div className="addMovie">
                <div className="titlesForMovieInput">
                    <p className="titlesForMovieInput">Title</p>
                    <p className="titlesForMovieInput">Url</p>
                    <p className="titlesForMovieInput">Year</p>
                </div>
                <div className="inputForMovieInput">
                    <input className="inputForMovieInput" onChange={getInputTitle}/>
                    <input className="inputForMovieInput" onChange={getInputUrl}/>
                    <input className="inputForMovieInput" onChange={getInputYear}/>
                </div>
                <div className="buttonForAddMovie">
                    <button className="buttonForAdd" onClick={addMovie}> Add </button>
                </div>
            </div>
        </div>
    );
}
export default HomePage;