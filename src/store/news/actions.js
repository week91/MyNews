
export const LAUNCH_LOADING = 'LAUNCH_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const PULL_COMMENT = 'SPULL_COMMENT';

export const startLoading = () => {
   return {
     type: LAUNCH_LOADING,
   };
 };
 
 export const stopLoading = () => {
   return {
     type: STOP_LOADING,
   };
 };
 export const pullComment = () => {
  return {
    type: PULL_COMMENT,
  };
};


export const getNewsByIdData=(idNews)=>(dispatch)=>{ dispatch(startLoading());
   fetch(`https://newsapi1.azurewebsites.net/api/news/${idNews}`, {
    method: 'GET'
})
   .then(response => response.json())
   .then(json=>dispatch(pullComment(json)))
   .then( dispatch(stopLoading()))
   
}