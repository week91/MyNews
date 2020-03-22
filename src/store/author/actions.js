export const LOGIN_USER = 'LOGIN_USER';



const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const userPostFetch = user => {
    return dispatch => {
      return fetch('https://newsapi1.azurewebsites.net/Account/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            //Тут прописываем логику
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  