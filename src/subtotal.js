import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal(){
    
    const history=useHistory();
    const[{basket},dispatch]=useStateValue();

    return(
      <div className="subtotal">
       
          <p>
            Subtotal ({basket.length} items): <strong>Rs {getBasketTotal(basket)}</strong>
          </p>

          <small className="subtotal_gift">
            <input type="checkbox"/> This order contains a gift
          </small>
          

       <button onClick={e=>history.push('/payment')}> Proceed To Checkout</button>
      </div>
    );
}
export default Subtotal; 