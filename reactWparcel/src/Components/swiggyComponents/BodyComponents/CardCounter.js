import React, { useEffect, useState } from "react";
import "./cardCounter.css";
import Cards from "./Cards.js";

const CardCounter = () => {
  const [allRestaurants, setNewRestaurants] = useState([]);
  const [searchText, setSearchtext] = useState("");
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
  // on serach  filter function
  function filterItems(searchText, allRestaurants) {
    const filterByName = allRestaurants.filter((Cards) =>
      Cards?.data?.data?.name.toLowerCase().includes(searchText)
    );
    return filterByName;
  }

  //  Top Rated Cards
  function TopRatedFood(allRestaurants) {
    const topRatings = allRestaurants.filter(
      (ratings) => ratings.data.data.avgRating > 3
    );
    // topRatings;
    console.log(topRatings)
  }
  return (
    <div className="card-counter-box">
      <div className="search-header">
        {/* Search input filter buttons  */}
        <div className="sreach-box">
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            type="submit"
            className="input-btn"
            onClick={() => {
              const filterCards = filterItems(searchText, allRestaurants);
              // console.log(filterCards)
              setNewRestaurants(filterCards);
            }}
          >
            search
          </button>
        </div>
        <div className="filter-btn-box">
          <button className="filter-btns">relevence</button>
          <button className="filter-btns">Discounts</button>
          <button
            className="filter-btns"
            onClick={() => {
              const TopRatedcards = TopRatedFood(allRestaurants);
              // setNewRestaurants(TopRatedcards);
            }}
          >
            top ratings
          </button>
        </div>
      </div>
      {/* resturant cards  */}
      <div className="cards-box">
        {allRestaurants?.map((resturant) => {
          {
            /* console.log(resturant ) */
          }
          return (
            <Cards resturantList={resturant} key={resturant.data.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default CardCounter;
