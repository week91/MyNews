import {Urls} from '../../data/urls'
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER1 = "LOGIN_USER";

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
});

export const loginUser1 = userObj => ({
  type: "LOGIN_USER1",
  payload: userObj
});

export const userPostFetchGet = () => {
  return dispatch => {
    const token1 = localStorage.getItem("token");
    if (token1) {
      return fetch(Urls.getlogin, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token1}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data === undefined) {
            console.log("неверный логин");
            localStorage.removeItem("token");
          } else {
            
            dispatch(loginUser(data));
          }
        });
    }
  };
};

export const userPostRegistration = user => {
  return dispatch => {
    return fetch("https://localhost:44383/Account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log("неверный фомат");
        } else {
          console.log(data);
          localStorage.setItem("token", data.jwt);
          dispatch(loginUser(user));
        }
      });
  };
};

export const userPostFetch = user => {

  return dispatch => {
    return fetch("https://localhost:44383/Account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data === undefined) {
          console.log("неверный логин");
        } else {
          localStorage.setItem("token", data.jwt.result);
          console.log(data.email);
          dispatch(loginUser1(data));
        }
      });
  };
};
