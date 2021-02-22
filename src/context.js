import React, { createContext, useEffect, useState } from "react";
import items from "./data.js";

let RoomContext = createContext();

let RoomProvider = (props) => {
  let [rooms, setRooms] = useState([]);
  let [sortedRooms, setsortedRooms] = useState([]);
  let [featuredRooms, setfeaturedRooms] = useState([]);
  let [loading, setLoading] = useState(true);

  let [type, setType] = useState("all");
  let [capacity, setCapacity] = useState(1);
  let [price, setPrice] = useState(0);
  let [minPrice, setMinprice] = useState(0);
  let [maxPrice, setMaxprice] = useState(0);
  let [minSize, setMinsize] = useState(0);
  let [maxSize, setmaxSize] = useState(0);
  let [breakfast, setBreakfast] = useState(false);
  let [pets, setPets] = useState(false);

  useEffect(() => {
    let Rooms = formatData(items);
    let FeaturedRooms = Rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setRooms(Rooms);
    setfeaturedRooms(FeaturedRooms);
    setsortedRooms(Rooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxprice(maxPrice);
    setmaxSize(maxSize);
  }, []);

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  let getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  let handleChange = (event) => {
    let type = event.target.type;
    let name = event.target.name;
    let value = event.target.value;
    // console.log(value);
    setType(value);
  };

  let handlePrice = (event) => {
    let type = event.target.type;
    let name = event.target.name;
    let value = event.target.value;
    console.log(typeof value, "");
    setPrice(value);
  };
  //   useEffect(() => {
  //     let tempRooms = [...rooms];
  //     if (type !== "all") {
  //       tempRooms = tempRooms.filter((room) => room.type === type);
  //     }

  //     price = parseInt(price);
  //     // console.log(typeof(price),"jjjj")
  //     tempRooms = tempRooms.filter((room) => {
  //       // console.log(room.price," ",price);
  //       return room.price >= price;
  //     });
  //     setsortedRooms(tempRooms);
  //   }, [type, price]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        price,
        breakfast,
        pets,
        getRoom: getRoom,
        handleChange: handleChange,
        handlePrice,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
