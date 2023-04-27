import React from "react"
import "./cardsShimmer.css"

const CardsShimmer = ()=>{
    return( <>
           <div className="shimmer-outer-box" >
        <figure className="shimmer-image"></figure>
        <div className="shimmer-data-containor">
        <figcaption className="shimmer-shop-name"></figcaption>
        <p className="shimmer-shimmer-cuisines-box"></p>
        <p className="shimmer-food-text"></p>
        <div className="shimmer-RTP-box">
            {/* <span className="shimmer-mrp-text"></span>
            <span className="shimmer-mrp-text"></span>
            <span className="shimmer-mrp-text"></span> */}
        </div>
        {/* <div className="shimmer-btn-box">
            <p className="shimmer-offer-text"></p>
            <p className="shimmer-offer-text"></p>
        </div> */}
        </div>
      </div>
    </>  )
}

export default CardsShimmer