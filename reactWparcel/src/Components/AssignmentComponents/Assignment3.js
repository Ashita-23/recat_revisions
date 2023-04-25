import React from "react"
import "./assignment3.css"
// import {logo_img} from ".\Components\images\gitpic2.jpg"
const Header = ()=>{
    return(<>
        <nav>
            <div className="Logo-box"><img src=".\src\images\gitpic2.jpg"/></div>
            <div  className="search-box">
                <input type="text" placeholder="search" className="search-input" />
                <button className="submit-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="toggle-icon"><i class="fa-solid fa-bars"></i></div>
        </nav>
    </>)
}
export default Header