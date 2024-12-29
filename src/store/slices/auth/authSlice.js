import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-autehnticated", //checking,no-autehnticated,autehnticated
    id: null,
    user: null,
    email: null,
    name: null,
    lastName: null,
    IdArea: null,
    area: null,
    idRol: null,
    rol: null,
    errorMesage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      const { id, user, email, name, lastName, IdArea, area, idRol, rol } =
        payload;
      state.id = id;
      state.user = user;
      state.email = email;
      state.name = name;
      state.lastName = lastName;
      state.IdArea = IdArea;
      state.area = area;
      state.idRol = idRol;
      state.rol = rol;
      state.errorMesage = null;
      state.status = 'authenticated';
    },
    logout: (state, {payload} ) => {
      state.status = 'not-authenticated';
      state.id =        null;
      state.user =      null;
      state.email =     null;
      state.name =      null;
      state.lastName =  null;
      state.IdArea =    null;
      state.area =      null;
      state.idRol =     null;
      state.rol =       null;
      state.errorMesage = payload?.message;
    },
    checkingCredencials: (state, payload) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredencials } = authSlice.actions;
