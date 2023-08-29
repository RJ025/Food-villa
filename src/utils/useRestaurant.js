import { useState , useEffect } from "react"

const useRestaurant = (id) => {
    const[restaurant , setRestaurant] = useState({});

    useEffect(()=>{
        getRestaurantInfo();
    } , [])

    async function getRestaurantInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.607583&lng=77.058493&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json =  await data.json();
        console.log(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards);
        const menuItemList = json?.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR.cards
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

        const menu = menuItemList.map((item)=>{
            if(item.card.card["@type"]===itemCategory || item.card.card["@type"]===nestedItemCategory)return item.card.card
        })

        const modifiedData = {
            info : json.data.cards[0].card.card.info , 
            menu : menu.filter(value => value !== undefined)
        }

        setRestaurant(modifiedData);
    }

    return restaurant;


}

export default useRestaurant