export const GET_NEWS_BYID = 'GET_NEWS_BYID';
export const POST_NEWS = 'POST_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';


const getNewsById=(id)=>{
    return{
           type:GET_NEWS_BYID ,
           payload:id
};
};


export const getNewsByIdData=(idNews)=>(dispatch)=>{
   fetch(`https://newsapi1.azurewebsites.net/api/news/${idNews}`, {
    method: 'GET'
})
   .then(response => response.json())
   .then(json=>dispatch(getNewsById(json)))
   
}