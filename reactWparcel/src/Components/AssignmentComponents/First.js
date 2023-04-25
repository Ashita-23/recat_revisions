import React from "react";
import "./first.css"


const title = (  <h2>Created react element .</h2>)
const SubTitle = () => {
    return(<h2>Created react Functional component and used it as a component compozistion .</h2>)
}
const First = () => {
  return (
    <>
      <div className="containor-box">
        <h1>Created a first react function component :</h1>
       {title}
       <SubTitle/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          consectetur illum provident porro quos, velit saepe officia quidem
          vitae necessitatibus nihil quae voluptatum aperiam! Optio!
        </p>
        <p>Created react functional components with component compozision.</p>
      </div>
    </>
  );
};

export default First;
