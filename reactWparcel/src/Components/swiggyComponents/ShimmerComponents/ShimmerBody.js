import CardsShimmer from "./CardsShimmer";
import "./shimmerBody.css";

const ShimmerBody = () => {
  return (
    <>
      <div className="shimmerBody-outer">
        <div className="shimmer-nav"></div>
        <div className="shimmer-card-holder">
          {Array(16)
            .fill(" ")
            .map((e,index) => (
              <CardsShimmer key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ShimmerBody;
