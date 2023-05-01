import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Header from './src/Components/AssignmentComponents/Assignment3';
// import First from  './src/Components/AssignmentComponents/First' ;
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom"
import NavHeader from './src/Components/swiggyComponents/HeaderComponents/NavHeader';
import CardCounter from './src/Components/swiggyComponents/BodyComponents/CounterComponents/CardCounter';
import About from "./src/Components/swiggyComponents/BodyComponents/AboutComponets/About"
import ErrorMess from './src/Components/swiggyComponents/FooterComponents/ErrorElement';
import MenuCounter from './src/Components/swiggyComponents/BodyComponents/MenuComponents/MenuCounter';
import Footer from './src/Components/swiggyComponents/FooterComponents/Footer';



const App = ()=> {
    return(<>
    {/* <Header/>
    <h1 className='hello-app'>Hello World !</h1>
    <First/> */}

    <NavHeader/>
    <Outlet/>
    {/* <CardCounter></CardCounter>
    <About/>
    <MenuCounter/> */}
    <Footer/>
    </>)
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorMess/>,
        children:[
          {
            path:"/",
            element:<CardCounter></CardCounter>,
        },
        {
            path:"/about",
            element:<About/>,
        },
        {
          path:"/resturant/:id",
          element:<MenuCounter/> ,
        }
        ]
    },
   
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ appRouter} />
   
  </React.StrictMode>
);