import { useSelector } from "react-redux"
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    const [total , setTotal] = useState(0);

    return (
        <>
            <h1 className="font-bold text-xl">cart - {cartItems.length}</h1>
            <div className="flex flex-wrap gap-2 justify-center content-start">
                {cartItems.map((item)=>{
                    return <CartCard key={item.id} {...item}/>
                })}
            </div>
           
        </>
    )
}

export default Cart