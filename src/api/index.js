import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

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
const getRealReviews = () => {
  return instance.get('/real-reviews');
};
const getRealReview = (postId) => {
  return instance.get(`/real-reviews/${postId}`);
};
const postCreateReviews = (reviewData) => {
  return instance.post(`/real-reviews`, reviewData);
};
const postDeleteReviews = (postId) => {
  return instance.delete(`/real-reviews/${postId}`);
};
const postEditReviews = (postId, reviewData) => {
  return instance.put(`/real-reviews/${postId}`, reviewData);
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
  getVisual,
  getLeaderBoard,
  getReviews,
  getRealReviews,
  getRealReview,
  postCreateReviews,
  postDeleteReviews,
  postEditReviews,
  getCurriculum,
  getCreator,
  getCommunity,
  getTodayProduct,
  getAside,
};
