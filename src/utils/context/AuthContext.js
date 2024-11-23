import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: localStorage.getItem('accessToken') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  });

  const setAuthData = (data) => {
    setAuth({
      accessToken: data.accessToken,
      user: data.user,
    });

    // Save to localStorage for persistence
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('tab', JSON.stringify('cast'));
  };

  const [movie, setMovie] = useState(null);

  const setMovieInfo = (movieInfo) => {
    setMovie(movieInfo);
    console.log(movieInfo)
  };

  const clearAuthData = () => {
    setAuth({
      accessToken: null,
      user: null,
    });

    setMovie(null);

    // Remove from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.removeItem('tab');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuthData, clearAuthData, movie, setMovieInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
