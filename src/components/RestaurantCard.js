import { IMG_CDN_URL } from "../Config"

const RestaurantCard = ({name , areaName , cloudinaryImageId , cuisines}) => {


    return (
        <div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow w-56">
            <div className="relative w-full ">
                <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full mob:w-[130px]"/>
            </div>
            <h2 className="text-base font-bold w-3/5 tracking-normal">{name}</h2>
            <h3 className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">{cuisines.join(', ')}</h3>
            <h4 className=" ">{areaName}</h4>
        </div>
    )

}

export default RestaurantCard