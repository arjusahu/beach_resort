import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import { RoomProvider } from "./context.js";

ReactDOM.render(
  
  <RoomProvider>
  <Router>
<App />
</Router>
</RoomProvider>
,
  document.getElementById('root')
);

