import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const MovieInformation = () => <h1>Movie Information</h1>;
const Actors = () => <h1>Actors</h1>;
const Movies = () => <h1>Movies</h1>;
const Profile = () => <h1>Profile</h1>;

const App = function () {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
