import React, { useEffect, useState } from "react";
import "./cardCounter.css";
import Cards from "./Cards.js";
import CardsShimmer from "../ShimmerComponents/CardsShimmer";

const CardCounter = () => {
  const [allRestaurants, setNewRestaurants] = useState([]);
  const [restaurantLists, setNewRestaurantLists] = useState([]);
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
    setNewRestaurantLists(jsonData?.data?.cards)
  }
  // on serach  filter function
  function filterItems(searchText, allRestaurants) {
    const filterByName = allRestaurants.filter((Cards) =>
      Cards?.data?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterByName;
  }
function fastDelivery(allRestaurants){
  const deliveryIn30Min = allRestaurants.filter((minTime)=> minTime.data.data.maxDeliveryTime < 40)
  return deliveryIn30Min   
}
  //  Top Rated Cards
  function TopRatedFood(restaurantLists) {
    const topRatings = restaurantLists.filter(
      (ratings) => ratings.data.data.avgRating > 3.5
    );
    return topRatings;
    console.log(topRatings)
  }

  // {(if restaurantLists.length == 0 )? }
  return (allRestaurants.length === 0)? <CardsShimmer/>:(
    <div className="card-counter-box">
      <div className="search-header">
        {/* Search input filter buttons  */}
        <div className="sreach-box">
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}/>
          <button
            type="submit"
            className="input-btn"
            onClick={() => {
              const filterCards = filterItems(searchText,allRestaurants);
              setNewRestaurantLists(filterCards);

              // console.log(filterCards)
              // if(filterCards.length === 0){
              // setNewRestaurantLists(allRestaurants);
              // }else{
              // setNewRestaurantLists(filterCards);
              // }
            }}>search</button>
        </div>
        <div className="filter-btn-box">
          <button className="filter-btns" onClick={()=>{
                          setNewRestaurantLists(allRestaurants);
          }}>relevence</button>
          <button className="filter-btns" onClick={()=>{
             const getFastDelivery =  fastDelivery(allRestaurants);
             setNewRestaurantLists(getFastDelivery)
          }}>Delivery</button>
          <button
            className="filter-btns"
            onClick={() => {
              const TopRatedcards = TopRatedFood(allRestaurants);
              setNewRestaurantLists(TopRatedcards);
            }}> top ratings</button>
        </div>
      </div>
      {/* resturant cards  */}
      <div className="cards-box">
      {/* <CardsShimmer/><CardsShimmer/><CardsShimmer/><CardsShimmer/> */}
        {restaurantLists?.map((resturant) => {  
          return  ( <Cards resturantList={resturant} key={resturant.data.data.id} />);})
          }
      </div>
    </div>
  );
};

export default CardCounter;
