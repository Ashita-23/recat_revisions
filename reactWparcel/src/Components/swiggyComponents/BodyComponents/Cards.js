
import React, { useState } from  "react"
import "./cards.css"
import { IMG_URL_CDN } from "./config"


const Cards = ({resturantList}) => {
const resturantLists = resturantList?.data?.data
// console.log(resturantLists)
const [QuickViewBtn , setQuickViewBtn] = useState(false)
const [ratings,setRatings] = useState(4)
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

// rating style green orange yellow

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
         <p className="cusine">{resturantLists.cuisines.join(",")}</p>
         </div>
         {/* sub- deatail box  */}
         <div className="sub-detail-box">
         <div className="MRP-box">
         <span className="rating-Four"><i className="fa-solid fa-star"></i> {resturantLists.avgRating}</span>
         <span className="delivery-time">{resturantLists.maxDeliveryTime} min</span>
         <span className="pay-amount">{resturantLists?.costForTwoString}</span>
         </div>
         <p className="offer-box">{resturantLists?.aggregatedDiscountInfo?.shortDescriptionList[0].meta || " " }</p>
         </div>
         <button className={!QuickViewBtn ? "view-btn" : "view-btn show-view-btn"}>Quick View</button>
    </div>
  </>)
}

export default Cards