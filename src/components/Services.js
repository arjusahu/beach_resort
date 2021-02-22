import React, {useState} from "react";
import Title from "./Title";
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";

let Services=()=>{
 const [services,setServices]=useState([
 {
  icon:<FaCocktail/>,
  title:"free cocktails",
  info:"Hope you like it"
 },
 {
    icon:<FaHiking/>,
    title:"Endless Hiking",
    info:"Hope you like it"
  
 },
 {
    icon:<FaShuttleVan/>,
    title:"Free shuttle",
    info:"Hope you like it"
  
 }
]);


    return (
 <section className="services">
     <Title title="services" />
     <div className="services-center">
     {services.map((item,index)=>{
     return (<article key={index} className="service" >
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
     </article>)
     })}
     </div>
     </section>
    );
}
export default Services;