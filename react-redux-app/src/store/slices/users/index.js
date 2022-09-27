import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    /* 4.-Creo la funcion en el reducers para setear la lista en el estado
    de la aplicacion, es una funcion que 1ro recibe el state y una action
    la state.list la quiero hacer igual al nuevo valor que es la lista que
    vamos a obtener desde la consulta y que la queremos pasar y de donde
    viene esa lista, en el action, la cual tiene una propiedad payload que
    va a traer los datos de los nuevos usuarios. el state es lo que recibe
    y el action lo que esta llegando*/
    /* 5.-Tengo que exportar setUsersList para que quede visible por fuera
    de los reducers */
    setUsersList: (state, action) => {
        state.list = action.payload;
    }
  },
});

/* 6.-exportamos y desectructuramos, ahora ya queda visible y la puedo
usar */
export const { setUsersList } = userSlice.actions;

export default userSlice.reducer;

/* 1.-Creo las funciones para realizar la llamada a la API, son funciones
asincronas. Creo la funcion fetchAllUsers la que va a traer a todos los
usuarios y simplemente es una arrow function, la cual debe retornr otra
funcion, pero como en el return no tenemos codigo para colocar se puede
evitar colocar el return y dejarlo = () = () => {}*/

/* 8.-Entra como parametro */
export const fetchAllUsers = () => (dispatch) => {
  /* 2.-Ahora tengo que hacer la llamada, entonces tengo que importar axios
    para que me permita ejecutar un get para traer alguna cosa. Y desde donde
    la vamos a traer, desde la API*/
  /* Como es una operacion asincrona va a retornar una promesa, esa promesa
    la podemos tratar con un then(()) si todo sale bien, esto tendra una
    respuesta. Vemos que hacemos con esa respuesta, pero si ocurre un error
    podemos tambien recibir un error y ese error tambien lo podriamos
    tratar, pero simplemente vamos a decirle que lo queremos imprimir por
    consola*/
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((response) => {
        /* 3.-Si todo sale bien, voy a tener una respuesta que trae un cuerpo
        llamado data que me trae todos los datos. Esa lista queremos colocarla
        en el estado global. Para pasar tengo que usar unas action que estan
        dentro de los reducers, un medio de comunicacion, que es una funcion,
        entonces creo una funcion en el reducres llamada setUserList*/
        /* 7.-Le paso response.data.data pero no va a funcionar asi, tengo
        que pasarle un dispatcher que es quien se encarga de ejecutar a la
        axtion y entra como parametro */
        /* 9.- No se muestra los usuarios por que tengo que ejecura
        la funcion, tengo que llamarla desde el componente*/
        dispatch(setUsersList(response.data.data));
    })
    .catch((error) => console.log(error));
};
