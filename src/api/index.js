import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

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

// visual
const getVisual = () => {
  return instance.get('/visual');
};

// leaderBoard
const getLeaderBoard = () => {
  return instance.get('/leader-board');
};

// reviews
const getReviews = () => {
  return instance.get('/reviews');
};
const postCreateReviews = (reviewData) => {
  return instance.post(`/reviews`, reviewData);
};

// curriculum
const getCurriculum = () => {
  return instance.get('/curriculum');
};

// creator
const getCreator = () => {
  return instance.get('/creator');
};

// community
const getCommunity = () => {
  return instance.get('/community');
};

// todayProduct
const getTodayProduct = () => {
  return instance.get('/today-product');
};

// leaderBoard
const getAside = () => {
  return instance.get('/aside');
};

export {
  getPopularSearch,
  getSearch,
  getVisual,
  getLeaderBoard,
  getReviews,
  postCreateReviews,
  getCurriculum,
  getCreator,
  getCommunity,
  getTodayProduct,
  getAside,
};
