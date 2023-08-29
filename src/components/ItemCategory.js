import Menu from "./Menu"
import { useState } from "react";
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'

const ItemCategory = ({category})=>{
    const [isVisible , setIsVisible] = useState(false);
    return (
        <>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-lg cursor-pointer" onClick={()=>setIsVisible(!isVisible)}>{category.title} : {category.itemCards.length}</h2>
                    {(!isVisible)?<button className="cursor-pointer mr-0 pr-0" onClick={()=>setIsVisible(true)}><IoIosArrowDown/></button>
                    :<button className="cursor-pointe" onClick={()=>setIsVisible(false)}><IoIosArrowUp/></button>}
                </div>
                {(isVisible) && <div className="flex flex-col justify-evenly">
                        {category.itemCards.map((item)=>{
                            return <Menu key={item.card.info.id} menuDish={item.card.info}/>
                })} </div>}
            
            </div>
        </>
    )
}

export default ItemCategory