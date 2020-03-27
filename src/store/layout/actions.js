export const GET_ALL_NEWS = "GET_ALL_NEWS";
export const LAUNCH_LOADING = "LAUNCH_LOADING";
export const STOP_LOADING = "STOP_LOADING";

export const getAllNews = newses => {
  return {
    type: GET_ALL_NEWS,
    payload: newses
  };
};

export const startLoading = () => {
  return {
    type: LAUNCH_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  };
};

export const getAllNews1 = () => dispatch => {
  startLoading();
  fetch("https://newsapi1.azurewebsites.net/api/news")
    .then(response => response.json())
    .then(json => dispatch(getAllNews(json)))
    .then(dispatch(stopLoading()));
};
