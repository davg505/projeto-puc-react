import axios from "axios";
const API_KEY = 'b11a7539498709c6deb29423b55df0c3';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path =>  `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesServices{
        static getMovies(){
            return axios (withBaseUrl('movie/popular'));
        }

        static getMovieById(id) {
            return axios(withBaseUrl(`movie/${id}`));
        }


}