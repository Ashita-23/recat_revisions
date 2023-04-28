import CardsShimmer from "./CardsShimmer"
import "./shimmerBody.css"


const ShimmerBody = ()=>{
    // console.log(allCards)
    return(<>
        <div className="shimmerBody-outer">
       <div className="shimmer-nav"></div>
       <div className="shimmer-card-holder">
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
   <CardsShimmer/>
       </div>
        </div>
    </>)
}

export default ShimmerBody