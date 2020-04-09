import { http, API_KEY } from "./http";
import { initialState, movieStore } from "../stores/movies";

export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

export const fetchMovies = async (term) => {
  const res = await http.get(`search/movie?api_key=${API_KEY}&query=${term}`);

  const {
    data: { results: movies },
  } = res;

  movieStore.set({
    ...initialState,
    isSearch: true,
    movies,
  });
};

export const resetMovies = () => {
  movieStore.set({
    ...initialState,
  });
};

export const fetchMovie = (id) => http.get(`movie/${id}?api_key=${API_KEY}`);
