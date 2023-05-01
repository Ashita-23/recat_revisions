import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cardCounter.css";
import Cards from "./Cards";
import CardsShimmer from "../../ShimmerComponents/CardsShimmer";
import ShimmerBody from "../../ShimmerComponents/ShimmerBody";

const CardCounter = () => {
  const [allRestaurants, setNewRestaurants] = useState([]);
  const [restaurantLists, setNewRestaurantLists] = useState([]);
  const [searchText, setSearchtext] = useState("");
    // console.log(allRestaurants);
  useEffect(() => {
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    const Restaurants_API = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.38704&lng=77.2821787&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const jsonData = await Restaurants_API.json();
    console.log(jsonData,"restData")
    setNewRestaurants(jsonData?.data?.cards);
    setNewRestaurantLists(jsonData?.data?.cards);
  }
  // on serach  filter function
  function filterItems(searchText, allRestaurants) {
    const filterByName = allRestaurants.filter((Cards) =>
      Cards?.data?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterByName;
  }
  function fastDelivery(allRestaurants) {
    const deliveryIn30Min = allRestaurants.filter(
      (minTime) => minTime.data.data.maxDeliveryTime < 40
    );
    return deliveryIn30Min;
  }
  //  Top Rated Cards
  function TopRatedFood(restaurantLists) {
    const topRatings = restaurantLists.filter(
      (ratings) => ratings.data.data.avgRating > 3.9
    );
    return topRatings;
  }
// Avoid reandring component if we dont get any data in allRestaurant variable (early return )
  if(!allRestaurants) return <h1> some thing wrong !</h1>

  return allRestaurants.length === 0 ? <ShimmerBody/> : (
    <div className="card-counter-box">
      <div className="search-header">
        {/* Search input filter buttons  */}
        <div className="sreach-box">
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)} />
          <button
            type="submit"
            className="input-btn"
            onClick={() => {
              const filterCards = filterItems(searchText, allRestaurants);
              (filterCards.length === 0 ) ? setNewRestaurantLists(allRestaurants): setNewRestaurantLists(filterCards) ;
          
            }}> search
          </button>
        </div>
        <div className="filter-btn-box">
          <button
            className="filter-btns"
            onClick={() => {
              setNewRestaurantLists(allRestaurants);
            }}> relevence
          </button>
          <button
            className="filter-btns"
            onClick={() => {
              const getFastDelivery = fastDelivery(allRestaurants);
              (getFastDelivery.length === 0 ) ? setNewRestaurantLists(allRestaurants):  setNewRestaurantLists(getFastDelivery) ;
            }}> Delivery
          </button>
          <button
            className="filter-btns"
            onClick={() => {
              const TopRatedcards = TopRatedFood(allRestaurants);
              (TopRatedcards.length === 0 ) ? setNewRestaurantLists(allRestaurants):  setNewRestaurantLists(TopRatedcards);}}> top ratings
          </button>
        </div>
      </div>
      {/* resturant cards  */}
      <div className="cards-box">
        {restaurantLists?.map((resturant) => {
            // if input data is not match any restaurant name than show info of no data found 
           if(restaurantLists.length === 0 ) return <h1>Restaurant is not found.</h1>
          return  restaurantLists.length === 0 ? (
            <CardsShimmer />
          ) : (
            <Link to={"/resturant/"+resturant.data.data.id} key={resturant.data.data.id} ><Cards resturantList={resturant} /> </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CardCounter;
