import axios from 'axios';
import React, {
  createContext, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';

const DataContext = createContext();
export default function MyCostomDataContextProvider({ children }) {
  const heroes = useSelector((store) => store.pictures.value);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.post('/api/user/check')
      .then((res) => setUser(res.data))
      .catch(console.log('user not found'));
  }, []);

  const handleLogin = (e, input) => {
    e.preventDefault();
    axios.post('/api/user/login', input)
      .then((res) => setUser(res.data))
      .catch(console.log)
      .then(() => {
        window.location.href = '/myfavorites';
      });
  };

  const handleLogout = () => {
    axios.get('/api/user/logout')
      .then(() => setUser({}))
      .then(() => {
        window.location.href = '/login';
      });
  };

  const updateUser = (id, input) => {
    axios.patch(`/api/user/${id}/edit`, input)
      .then((res) => setUser(res.data))
      .catch(console.log)
      .then(() => {
        window.location.href = '/Logout';
      });
  };

  return (
    <DataContext.Provider value={
      {
        heroes, user, setUser, handleLogin, handleLogout, updateUser,
      }
    }
    >
      {children}
    </DataContext.Provider>
  );
}
export { DataContext };
