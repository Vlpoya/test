import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from './components/NavBar';
import Heroes from './components/Pages/Heroes/Heroes';
import MyFavorite from './components/Pages/MyFaforite/MyFavorite';
import PlayersInfo from './components/Pages/PlayersInfo/PlayersInfo';
import Login from './components/Pages/Login/Login';
import Signup from './components/Pages/SignUp/Signup';
import ProtectedRoute from './components/Pages/ProtectedRoute';
import { DataContext } from './Context/DataContext';
import WordsPage from './components/Pages/Words/WordsPage';
import PersonalPage from './components/Pages/PersonalPage/PersonalPage';

function App() {
  const { user } = React.useContext(DataContext);
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Routes>

        {/* outlet */}
        <Route element={<ProtectedRoute isAllowed={!user.id} redirect="/Heroes" />}>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Route>
        {/* children */}
        <Route path="/Heroes" element={<Heroes />} />
        <Route path="/PersonalPage" element={<PersonalPage />} />
        <Route path="/Words" element={<WordsPage />} />

        <Route
          path="/Myfavorites"
          element={(
            <ProtectedRoute isAllowed={!!user.id} redirect="/Login">
              <MyFavorite />
            </ProtectedRoute>
        )}
        />
        <Route
          path="/Playerinfo"
          element={(
            <ProtectedRoute isAllowed={!!user.id} redirect="/Login">
              <PlayersInfo />
            </ProtectedRoute>
        )}
        />
      </Routes>
    </Container>
  );
}

export default App;
