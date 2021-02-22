import React from "react";
import Home from "./pages/Home.js"
import Error from "./pages/Error.js";
import Rooms from "./pages/Rooms.js";
import SingleRooms from "./pages/SingleRooms.js"
import Navbar from "./components/Navbar.js";
import "./App.css";

import {Route,Switch} from 'react-router-dom';
let App=()=>
{
    return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRooms} />
    <Route  component={Error} />
    </Switch>
    </>

    );
}
export default App;

