import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter , RouterProvider ,  Outlet} from "react-router-dom";
import RestaurantDetails from "./components/RestaurantDetails";
import { Suspense, lazy, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
const Instamart = lazy(()=>import("./components/Instamart"))

function App() {
  const [user , setUser] = useState({
    name : "ritik" ,
    email : "test@gmail.com"
  }) 
  return (
    <div>

      <UserContext.Provider value={{
        user : user ,
        setUser : setUser 
      }}>
        <Header/>
        <Outlet/>
        <Footer/>
      </UserContext.Provider>
      
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path : "/" ,
    element : <App/> ,
    errorElement : <Error/>,
    children : [
      {
        path : "/" ,
        element : <Body/>
      },
      {
        path : "/about" ,
        element : <About/>
      } ,
      {
        path : "/contact" ,
        element : <About/>
      } ,
      {
        path : "/restaurant/:id" ,
        element : <RestaurantDetails/>
      } ,
      {
        path : "/instamart" ,
        element : (
            <Suspense fallback = {<Shimmer/>}>
              <Instamart/>
            </Suspense>
        )
      }
    ]
  } 
])

export default appRouter;
