import React, { useEffect } from "react";
// redux
import { fetchAllUsers } from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {

  const { list: users } = useSelector(state => state.users)

  const dispatch = useDispatch();

  // const users = [
    /* {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
    }, */
  // ]

  useEffect(() => {
      dispatch(fetchAllUsers());
  },[dispatch])

  return (
    <div className="container mt-4">
      {/* En cada columna de la row hay una tarjeta con un usuario */}
      <div className="row">
        {/* Necesito iterar a los users usando la funcion map que dentro
            tiene una funcion con un return implicito y dentro un div, recibe
            a un usuario y un index que lo utilizo para el key*/}
        {
        users.map((user, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img src={user.avatar} alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default UserList;
