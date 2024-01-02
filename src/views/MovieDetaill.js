import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesServices } from "../api/MoviesService";

export const MovieDetaill = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesServices.getMovieById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>

            <img src={movie.backdrop_path} alt={movie.title}  style={{ width: '100%', height: 'auto' }} />
   

        </>
    )
}