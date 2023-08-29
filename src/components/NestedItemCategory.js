import ItemCategory from "./ItemCategory"
import { useState } from "react";
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'

const NestedItemCategory = ({nestedCategory})=>{
    const [isVisible , setIsVisible] = useState(false);
    return (
        <>  
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-lg cursor-pointer" onClick={()=>setIsVisible(!isVisible)}>{nestedCategory.title}</h1>
                    {(!isVisible)?<button className="cursor-pointer" onClick={()=>setIsVisible(true)}><IoIosArrowDown/></button>
                    :<button className="cursor-pointe" onClick={()=>setIsVisible(false)}><IoIosArrowUp/></button>}
                </div>
                {(isVisible) && nestedCategory.categories.map((category)=>{
                    return (<div className=" flex flex-row gap-10"><ItemCategory category={category}/></div>)
                })}
            </div>
        </>
    )
}

export default NestedItemCategory