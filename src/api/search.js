// Search
const getPopularSearch = async () => {
  return fetch(
    `${process.env.VUE_APP_API_SEARCH}/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=${process.env.VUE_APP_API_LANGUAGE}`
  ).then((response) => response.json());
};
const getSearch = async (keyword) => {
  return fetch(
    `${process.env.VUE_APP_API_SEARCH}/search/movie?api_key=${process.env.VUE_APP_API_KEY}&language=${process.env.VUE_APP_API_LANGUAGE}&query=${keyword}`
  ).then((response) => response.json());
};

export { getPopularSearch, getSearch };
