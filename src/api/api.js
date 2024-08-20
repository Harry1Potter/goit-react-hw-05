import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjAyMzM3MGUxZTYxY2U0MzQyMzkyY2U3NzIxZGQxYyIsIm5iZiI6MTcyMzk2ODk4OC4zOTAyNjQsInN1YiI6IjY2YzFhYjZhNzQxMzhlMTBkNzAzZDllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cgu4PgWvfGfmW1zWdDAaI0Bnp-9B_YagFTfqwEplnrg",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data;
};

export const fetchMovieByQuery = async (query) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`movie/${id}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReview = async (id) => {
  const response = await axios.get(`movie/${id}/reviews`, options);
  return response.data.results;
};