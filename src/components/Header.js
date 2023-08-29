import { useState } from "react"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Title = () => (
    <a href="/">
        <img
            className='logo ml-2.5 w-[70px]'
            alt="logo"
            src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0"
        />
    </a>
)

const Header = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);
    console.log(user);

  return (
    <div className='flex justify-between'>
        <Title/>

        <div className=" flex justify-between px-5">
            <ul className="flex justify-around p-4">
                <l1>{user.name}-{user.email}</l1>
                <Link to="/">
                    <li className="mx-4">Home</li>
                </Link>
                <Link to="/about">
                    <li className="">About</li>
                </Link>
                <Link to="/contact">
                    <li className="mx-4">Contact</li>                
                </Link>
                <Link to="/instamart">
                    <li className="">Instamart</li>                
                </Link>
                <li className="mx-4">Cart</li>
                {(isOnline)?<p>🟢</p>:<p>🔴</p>}
            </ul>
            {(isLoggedIn) ?  <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>logout</button> : <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Login</button>}
        </div>
        
        
       
    </div>
  )
}

export default Header