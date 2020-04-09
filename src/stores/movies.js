import { writable, derived } from "svelte/store";

export const initialState = {
  movies: [],
  isSearch: false,
};

export const movieStore = writable({ ...initialState });

export const movies = derived(movieStore, ({ movies }) =>
  movies.filter(({ backdrop_path }) => !!backdrop_path)
);
