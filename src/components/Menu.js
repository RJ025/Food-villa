import { useState } from "react";
import { IMG_CDN_URL } from "../Config";

const Menu = ({menuDish}) => {

    const { id, name, description, price, imageId , itemAttribute} = menuDish;
    const [count , setCount] = useState(0);

    console.log("render")

    return (

        <div
      className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray"
      key={id}
    >
        <div className="flex flex-col basis-[600px]">

            <div className="flex flex-row items-start">
                <h3 className="font-bold text-lg w-3/5">{name}</h3>
            
                {(itemAttribute.vegClassifier == "VEG")?  
                    <img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol"/>:
                    <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>}
            </div>
            
            <p className="mt-1 text-base font-normal">
            {price > 0 ? "₹ " + price / 100 : " "}{" "}
            </p>
            <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
            {description}
            </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
            {imageId && (
            <img
                className="w-[118px] h-[96px]"
                src={IMG_CDN_URL + imageId}
                alt={name}
            />
            )}

            <div  className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray">
                <button className="text-xl text-gray-count font-semibold" onClick={()=>setCount(count+1)}>+</button>
                {(count>=0)?<span className="text-base text-green">{count}</span>:<span>0</span>}
                {(count>=0)?<button className="text-xl text-gray-count font-semibold" onClick={()=>setCount(count - 1)}>-</button>:<button className="text-xl text-gray-count font-semibold">-</button>}
            </div>
            
             
        </div> 
      </div>
    )
}

export default Menu;