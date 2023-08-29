import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [allRestaurant , setAllRestaurant] = useState([]);
    const [fillteredRestaurant , setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] = useState("");

    const {user , setUser} = useContext(UserContext)
    // console.log(...user)
    // console.log(user);

    const filterSeach = (searchText , allRestaurant) => {
        
        const filterdata = allRestaurant.filter((restaurant)=>{
           
            return restaurant.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        })

        return filterdata;
    }

    useEffect(()=>{
        getData();
    } , [])

    async function getData() {
        const result = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.607583&lng=77.058493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await result.json();
        console.log(json?.data?.cards[0])
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(!allRestaurant)return null; //early return 


  return (allRestaurant?.length === 0) ? <Shimmer/> : (
    <>
        <div className="flex flex-col gap-5">
            <div>
                <input
                    className="bg-white h-8 border-2 rounded-lg mx-4"
                    type="text"
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button 
                    className='bg-white mx-3  p-2 rounded-lg border-2 border-rose-500'
                    onClick={()=>{
                        const data = filterSeach(searchText , allRestaurant);
                        // update the state
                        setFilteredRestaurant(data)
                    }}
                    >
                    Search
                </button>
                <input
                    className="bg-white h-8 border-2 rounded-lg mx-4"
                    type="text"
                    value={user.name}
                    onChange={(e)=>setUser({
                        ...user ,
                       name : e.target.value
                    })}
                />
            </div>
            <div className="flex flex-wrap gap-2 justify-center content-start">
                {/* condtion if there is no restaurant in data which matches search */}
                {(fillteredRestaurant.length === 0) ? <h2>no restaurant AVAILABLE</h2> : fillteredRestaurant.map((restaurant)=>{
                    return (<Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard {...restaurant.info}/>
                    </Link>)
                })}
                
            </div>
        </div>
        
    </>
  )
}

export default Body