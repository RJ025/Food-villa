import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import { v1 as uuidv1 } from 'uuid';
import useRestaurant from "../utils/useRestaurant";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const {id} = useParams();

    const restaurant = useRestaurant(id);
    console.log(restaurant);

    return (!restaurant)?<Shimmer/>: (
        <div>
            <RestaurantInfo {...restaurant.info}/>
            <RestaurantMenuList menu={restaurant.menu}/>;
        </div>
    )
}

export default RestaurantDetails;