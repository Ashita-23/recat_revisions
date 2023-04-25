// import React from "react"
import './index.css';
// import Header from './src/Components/AssignmentComponents/Assignment3';
// import First from  './src/Components/AssignmentComponents/First' ;
import NavHeader from './src/Components/swiggyComponents/HeaderComponents/NavHeader';
import CardCounter from './src/Components/swiggyComponents/BodyComponents/CardCounter';


const App = ()=> {
    return(<>
    {/* <Header/>
    <h1 className='hello-app'>Hello World !</h1>
    <First/> */}

    <NavHeader/>
    <CardCounter></CardCounter>
    </>)
}

export default App