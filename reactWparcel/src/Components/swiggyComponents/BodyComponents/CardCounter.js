import React, { useEffect, useState } from "react";
import "./cardCounter.css";
import Cards from "./Cards.js";

const CardCounter = () => {
  const [allRestaurants, setNewRestaurants] = useState([]);
//   console.log(allRestaurants);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const Restaurants_API = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.38704&lng=77.2821787&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await Restaurants_API.json();
    // console.log(jsonData)
    setNewRestaurants(jsonData?.data?.cards);
  }

  return (
    <div className="card-counter-box">
      <div className="search-header">
        {/* Search input filter buttons  */}
        <div className="sreach-box">
          <input type="text" placeholder="Search" className="input-search" />
          <button type="submit" className="input-btn">
            search
          </button>
        </div>
        <div className="filter-btn-box">
          <button className="filter-btns">relevence</button>
          <button className="filter-btns">Discounts</button>
          <button className="filter-btns">top ratings</button>
        </div>
      </div>
      {/* resturant cards  */}
      <div className="cards-box">

      {
        allRestaurants?.map((resturant )=>{
            {/* console.log(resturant ) */}
            return(<Cards resturantList={resturant} key={resturant.data.data.id}/>)
        }) 
      }
      
      </div>
    </div>
  );
};

export default CardCounter;
