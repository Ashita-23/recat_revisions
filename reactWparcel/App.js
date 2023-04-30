import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Header from './src/Components/AssignmentComponents/Assignment3';
// import First from  './src/Components/AssignmentComponents/First' ;
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import NavHeader from './src/Components/swiggyComponents/HeaderComponents/NavHeader';
import CardCounter from './src/Components/swiggyComponents/BodyComponents/CardCounter';
import About from "./src/Components/swiggyComponents/BodyComponents/AboutComponets/About"
import ErrorMess from './src/Components/swiggyComponents/FooterComponents/ErrorElement';


const App = ()=> {
    return(<>
    {/* <Header/>
    <h1 className='hello-app'>Hello World !</h1>
    <First/> */}

    <NavHeader/>
    <CardCounter></CardCounter>
    <About/>
    </>)
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorMess/>
    },
    {
        path:"about",
        element:<About/>,
    }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ appRouter} />
   
  </React.StrictMode>
);