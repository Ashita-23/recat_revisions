import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";
import "./menuCounter.css"
import ShimmerBody from "../../ShimmerComponents/ShimmerBody";
// import IMG_URL_CDN from "../config"

const MenuCounter = () => {
    const IdPerameter = useParams()
    // const {id} = IdPerameter
    const [menuList , setMenuList] = useState()
    console.log(IdPerameter )



  useEffect(() => {
    getMenuData()
  }, []);

  async function getMenuData() {
    const Menu_APL = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.38704&lng=77.2821787&restaurantId="+IdPerameter?.id+"&submitAction=ENTER"
    );
    const Menu_List = await Menu_APL.json();

    // console.log(Menu_List,"menuData")
    setMenuList(Menu_List?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]      ) }
    // setMenuList(Menu_List?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards) }
    // (!menuList)? <ShimmerBody/> :
    if(!menuList) return <h1>wait for a while !</h1>
  return  (
    <>
     <div className="menuCard-outer">
      <div>
        <h3>current Resturant id {IdPerameter.id}</h3>
        <h2>current Resturant id</h2>
      </div>
      <div className="itemList-holder">
      <h4>{ menuList?.card?.card?.title}</h4>
       {
        menuList?.card?.card?.itemCards?.map((itemsData)=>{
  {/* console.log(Object.value(itemsData)) */}
  return(<>  
  <MenuItems itemsData = {itemsData}  key={itemsData?.card?.info?.id}/></>)
     
        })
       }
      </div>
    
     </div>
    </>
  );
};

export default MenuCounter