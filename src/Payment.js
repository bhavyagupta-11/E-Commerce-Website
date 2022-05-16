import React, { useEffect, useState } from "react";
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement,useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal} from "./reducer";
import { useHistory} from "react-router-dom";
import axios from "axios";
//import { db } from "firebase";

function Payment(){
    
    const [{basket,user},dispatch]=useStateValue();
    const history=useHistory();

    const stripe=useStripe();
    const elements=useElements();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [clientsecret,setClientsecret]=useState(true);

    useEffect(
        ()=>{
            //generates a special stripe secret which allows us to charge a customer
            const getClientsecret=async()=>{
                const response=await axios(
                    {
                        method:'post',
                        url:'./payments/create?total=${getBasketTotal(basket)}'
                    }
                );
                setClientsecret(response.data.clientsecret);
            }
            getClientsecret();

        },[basket]
    )

    console.log('THE SECRET IS >>>',clientsecret)

    const handleSubmit=async(event)=>{
       event.preventDefault();
       setProcessing(true);

       const payload=await stripe.confirmCardPayment(
           clientsecret,{
               payment_method:{
                   card:elements.getElement(CardElement)
               }
           }
       ).then(({paymentIntent})=>{
            //payment intent is payment confirmation

            /*db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set(
                  {
                      basket:basket,
                      amount: paymentIntent.amount,
                      created: paymentIntent.created
                  }
              )*/

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch(
                {
                    type:'EMPTY_BASKET'
                }
            )

            history.replace('/orders')
       })
    }

    const handleChange=event=>{
          setDisabled(event.empty);
          setError(event.error ? event.error.message:"");
    }

    return(
        <div className='payment'>
          <div className="payment_container">

              <h1>Checkout <a href="/checkout">{basket?.length} items</a></h1>

             <div className="payment_section">
                 <div className="payment_title">
                     <h3>Delivery Address</h3>
                 </div>

                 <div className="payment_address">
                      <p>{user?.email}</p>
                      <p>G 670 Gamma 2 Greater Noida</p>
                 </div>
             </div>

             <div className="payment_section">
                  <div className="payment_title">
                      <h3>Review items and delivery</h3>
                  </div>

                  <div className="payment_items">
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

                  <div className="payment_section">
                      <div className="payment_title">
                        <h3>Payment Method</h3>
                      </div>

                      <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment_pricecontainer">
                             <h3>Order Total {getBasketTotal(basket)}</h3>
                             <button disabled={processing || disabled || succeeded}>
                                 <span>
                                     {processing? <p>Processing</p>: "Buy Now"}
                                 </span>
                             </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                      </div>

                  </div>
             </div>

          </div>
        </div>
    )
}

export default Payment;