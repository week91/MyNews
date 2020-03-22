export const GET_ALL_NEWS = 'GET_ALL_NEWS';


export const getAllNews=(newses)=>{
    return{
           type:GET_ALL_NEWS ,
           payload:newses
};
};


export const getAllNews1=()=>(dispatch)=>{
   fetch('https://newsapi1.azurewebsites.net/api/news'
   
   )
   .then(response => response.json())
   .then(json=>dispatch(getAllNews(json)))
   
}