
import React from  "react"
import "./cards.css"

const Cards = ({resturantList}) => {
const resturantLists = resturantList?.data?.data
// console.log(resturantLists)
  return(<>
      <div className="card-outer" resturantId = {resturantList?.sla?.restaurantId}>
    {/* display image */}
        <figure className="image-box">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resturantLists?.cloudinaryImageId
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
         <span className="rating">{resturantLists.avgRating}</span>
         <span className="delivery-time">{resturantLists.maxDeliveryTime}</span>
         <span className="pay-amount">{resturantList?.costForTwo/100 || "not found   "}</span>
         </div>
         <p>{resturantList?.aggregatedDiscountInfoV2?.descriptionListdescriptionList[0].meta || "no offer "}</p>
         </div>
         <button className="view-btn">Quick View</button>
    </div>
  </>)
}

export default Cards