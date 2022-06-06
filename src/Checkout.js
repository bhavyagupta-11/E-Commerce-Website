import React from "react";
import"./checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import book from "./book.jpg";

function Checkout(){
  const[{basket,user},dispatch]= useStateValue();
    return(
     <div className="checkout">
       <div className="checkout_left">
           <div className="checkout_title">
             <h3>heya,{user?.email}</h3>
             <h3>Your Shopping Cart</h3> 
           
            
           

            {basket.map(item=>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}

            </div>
           

       </div>

       <div className="checkout_right">
           <Subtotal/>
       </div>
     </div>
    );
}
export default Checkout;