import React, { useEffect, useState, useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

let SingleRooms = (props) => {
  console.log(props);
  let [slug, setSlug] = useState(props.match.params.slug);
  let [defaultBcg, setDefaultBcg] = useState("");

  let context = useContext(RoomContext);
  const { getRoom } = context;
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max Capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "Pets are allowed" : "Pets are not allowed"}</h6>
            <h6>{breakfast && "Free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>-{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default SingleRooms;
