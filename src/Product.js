import React from "react";
import "./Product.css";
import iphone from "./iphone.jpg";
import { useStateValue } from "./StateProvider";
function Product({id,title,image,price,rating}){
    
    const [{basket},dispatch]=useStateValue();
console.log("item is added to the basket",basket);

    const addtocart=()=>{
        //dispatch the item into datalayer
        dispatch({
           type:'ADD_TO_BASKET',
           item:{
               id:id,
               title:title,
               image:image,
               price:price,
               rating:rating,
           } 
        })
    }

    return(
        <div className="product">
          <div className="product_info">
              <p>{title}</p>
              <p className="product_price">
                  <strong>{price}</strong>
              </p>
              <div className="product_rating">
                  <p>{rating} stars</p>
              </div>
              <img className="product_image" src={image} alt="IPHONE"/>
              <button onClick={addtocart} className="button">Add to Cart</button>
          </div>
        </div>
    );
}
export default Product;