
import React, { useState } from  "react"
import "./cards.css"
import { IMG_URL_CDN } from "./config"

const Cards = ({resturantList}) => {
const resturantLists = resturantList?.data?.data
const [QuickViewBtn , setQuickViewBtn] = useState(false)
const  ShowQuickView = () => {
  if(QuickViewBtn ===false){
  return setQuickViewBtn(true)
  }
}
// const  HideQuickView = () => {
//   if(QuickViewBtn ===true){
//   return setQuickViewBtn(false)
//   }
// }
// console.log(resturantLists)
  return(<>
      <div className="card-outer" resturantid = {resturantList?.sla?.restaurantId} onMouseEnter={()=>ShowQuickView()}>
    {/* display image */}
        <figure className="image-box">
            <img src={IMG_URL_CDN+resturantLists?.cloudinaryImageId
} alt="foodimage" className="images" />
        </figure>
        {/* deatail box  */}
        <div className="detail-box">
         <p className="name">{resturantLists.name}</p>
         {/* <p className="cusine">{resturantLists.cuisines.join(",")}</p> */}
         </div>
         {/* sub- deatail box  */}
         <div className="sub-detail-box">
         <div className="MRP-box">
         <span className="rating-Four"><i className="fa-solid fa-star"></i> {resturantLists.avgRating}</span>
         <span className="delivery-time">{resturantLists.maxDeliveryTime} min</span>
         <span className="pay-amount">{resturantList?.costForTwo/100 || "not found   "}</span>
         </div>
         <p className="offer-box">{resturantList?.aggregatedDiscountInfoV2?.descriptionListdescriptionList[0].meta || "no offer "} <i className="fa-solid fa-tags"></i></p>
         </div>
         <button className={!QuickViewBtn ? "view-btn" : "view-btn show-view-btn"}>Quick View</button>
    </div>
  </>)
}

export default Cards