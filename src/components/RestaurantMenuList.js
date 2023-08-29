import NestedItemCategory from "./NestedItemCategory";
import ItemCategory from "./ItemCategory";

const RestaurantMenuList = ({menu}) => {
    
    console.log(menu);

    return (!menu)?null: (
        <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
            <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
                {menu.map(item=>{
                    return (!item.categories)?<ItemCategory category={item}/>:<NestedItemCategory nestedCategory={item}/>
                })}
            </div>
        </div>
    )
}
export default RestaurantMenuList;