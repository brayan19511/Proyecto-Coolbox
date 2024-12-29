// thunks tareas asincronas

import { checkingCredencials, login, logout } from "./authSlice";
import { AdapterUser, UserApi } from "./provider";

export const checkingAutenticate = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
  };
};

export const logingUsetWithEmailPassword = (user, password) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
    try {
        const resp=await UserApi.post('login',{
            nombreUsuario:user,
            contraUsuario:password
        })
        const userAdapter=AdapterUser(resp.data )
        
        dispatch(login(userAdapter))
        
    } catch (error) {
        dispatch(logout({message:error.response.data.message}))
    }

  };    
};
