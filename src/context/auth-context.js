//jshint esversion: 6
import React from 'react';

const authContext = React.createContext({authenticated: false, login: () => {}});//technically, it doesn't have to be an object. you could also have an array, a string, a number etc as a context value.

export default authContext;