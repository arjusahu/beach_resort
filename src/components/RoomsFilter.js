import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
//unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    handlePrice,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  //get unique types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <></>
    // <section className="filter-container">
    //   <Title title="Search rooms" />
    //   <form className="filter-form">
    //     <div className="form-group">
    //       <label htmlFor="type">room type</label>
    //       <select
    //         name="type"
    //         id="type"
    //         value={type}
    //         className="form-control"
    //         onChange={handleChange}
    //       >
    //         {types}
    //       </select>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="price">Room Price ${price}</label>
    //       <input
    //         type="range"
    //         name="price"
    //         min={minPrice}
    //         max={maxPrice}
    //         id="price"
    //         value={price}
    //         onChange={handlePrice}
    //         className="form-control"
    //       />
    //     </div>
    //   </form>
    // </section>
  );
};

export default RoomsFilter;
