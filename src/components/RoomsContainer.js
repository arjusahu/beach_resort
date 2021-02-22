import React,{useContext} from 'react';
import RoomsFilter from "./RoomsFilter.js";
import RoomsList from "./RoomsList.js";
import {RoomContext} from "../context";
import Loading from "./Loading";

const RoomsContainer = () => {
    const context=useContext(RoomContext);
    const {loading,sortedRooms,rooms}=context;
    if (loading){
        return <Loading />
    }
    return (
        <>
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={sortedRooms}/>
        </>
    );
};

export default RoomsContainer;