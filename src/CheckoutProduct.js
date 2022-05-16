import React from "react";
import"./checkoutproduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({id,image,title,price,rating,hidebutton}){
  
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
      dispatch(
        {
          type:'REMOVE_FROM_BASKET',
          id:id,
        }
      )
  }  
  
  return(
      <div className="checkoutproduct">
        <img className="checkoutproduct_image" src={image}/>

        <div className="checkoutproduct_info">
            <p className="checkoutproduct_title">{title}</p>
        
            <p className="checkoutproduct_price">
             <strong>{price}</strong>   
            </p> 

            <div className="checkoutproduct_rating">
                {rating} stars
            </div>
        </div>
        {
          !hidebutton && (
            <button onClick={removeFromBasket}>Remove From Cart</button>
          )
        }

        
      </div>
    );
}

export default CheckoutProduct;