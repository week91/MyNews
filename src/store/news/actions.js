export const GET_NEWS_BYID = 'GET_NEWS_BYID';
export const POST_NEWS = 'POST_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';
export const LAUNCH_LOADING = 'LAUNCH_LOADING';
export const STOP_LOADING = 'STOP_LOADING';


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

const getNewsById=(id)=>{
    return{
           type:GET_NEWS_BYID ,
           payload:id
};
};


export const getNewsByIdData=(idNews)=>(dispatch)=>{ dispatch(startLoading());
   fetch(`https://newsapi1.azurewebsites.net/api/news/${idNews}`, {
    method: 'GET'
})
   .then(response => response.json())
   .then(json=>dispatch(getNewsById(json)))
   .then( dispatch(stopLoading()))
   
}