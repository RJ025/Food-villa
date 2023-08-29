import { IMG_CDN_URL } from "../Config";

const RestaurantInfo = ({name , cloudinaryImageId , areaName}) => {

    return(    
        <>
            <div className="p-4 bg-yellow-500">
                <div className="flex flex-row justify-center gap-40">
                    <img className="w-30" src={IMG_CDN_URL + cloudinaryImageId}/>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <h4>{areaName}</h4>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RestaurantInfo;