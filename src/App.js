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
import SignupForm from "./components/Signup";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(()=>import("./components/Instamart"))

function App() {
  const [user , setUser] = useState({
    name : "ritik" ,
    email : "test@gmail.com"
  }) 
  return (
    <Provider store={store}>

      <UserContext.Provider value={{
        user : user ,
        setUser : setUser 
      }}>
        <Header/>
        <Outlet/>
        <Footer/>
      </UserContext.Provider>
      
    </Provider>
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
      } ,
      {
        path : "/signup" ,
        element : <SignupForm/>
      } ,
      {
        path : "/cart" ,
        element : <Cart/>
      }
    ]
  } 
])

export default appRouter;
