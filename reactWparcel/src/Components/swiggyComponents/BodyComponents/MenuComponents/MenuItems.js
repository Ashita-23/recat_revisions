
import "./menuItem.css"
// import MENU_IMG_CDN from "../config"

const MenuItems = ({itemsData})=>{
   
    //   console.log(itemsData,"from") 
    //   console.log(itemsData?.card,"card-data") 
    
    return(<>
  <div className="menuItem-outer" key={itemsData?.card?.info?.id}>
    <p><i className="fa-regular fa-circle-stop"></i>{itemsData?.card?.info?.itemAttribute.vegClassifier}</p>
    <p><i className="fa-solid fa-star"></i>{itemsData?.card?.info?.ratings?.aggregatedRating?.rating ||"--"}</p>
    <p>{itemsData?.card?.info?.name ||"note found....."} </p>
    {/* <p>{itemsData?.card?.info?.category ||"note found....."} </p> */}
    <p>{itemsData?.card?.info?.description ||"note found....."} </p>
    <p>Rs.{itemsData?.card?.info?.price/100 ||"note found....."} For Two </p>
  </div>
    </>)
}

export default MenuItems