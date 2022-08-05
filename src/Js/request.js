const API_KEY = "gCQi0BxM27LsqJcuc3siZU6RAJ5uxrH7";

const requests = {
  fetchMostPopular: `/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`,
  fetchTopStories: `/svc/topstories/v2/home.json?api-key=${API_KEY}`,
  fetchTopFacebookShares: `/svc/mostpopular/v2/shared/1/facebook.json?api-key=${API_KEY}`
};

export default requests;
