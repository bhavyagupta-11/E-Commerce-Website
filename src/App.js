import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import './App.css';
import Header from './Header.js';
import Checkout from './Checkout.js';
import Login from './login';
import Home from "./Home.js";
import { BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise=loadStripe("pk_test_51KzfZfSH8iXw5N8fVUkzPrjOYKI2BVUxNgiMqrd3BUtfxsbi6QaoSddOX5QGsEf4rnhulmYQWuSwCS78ozzHWLdx00cKUv8tmS");


function App() {

  const[{},dispatch]=useStateValue();
  

  useEffect(()=>{
    //will run only when app component runs

    auth.onAuthStateChanged(
      (authUser)=>{
        console.log('THE USER IS ',authUser);

        if(authUser){
           //the user just logged in
           dispatch(
             {
               type:'SET_USER',
               user:authUser,
             }
           );

        }else{
          //the user is logged out
          dispatch(
            {
              type:'SET_USER',
              user:null,
            }
          );
        }
      }
    );
  },[]);

  return (
    <Router>
       <div className="app">
         <Switch>
           <Route path="/login">
            <Login/>
           </Route>

           <Route path="/orders">
            <Header/>
            <Orders/>
           </Route>

           <Route path="/checkout">
             <Header />
             <Checkout/>
           </Route>

           <Route path="/payment">
             <Header />
             <Elements stripe={promise}>
             <Payment/>
             </Elements>
            
           </Route>

           <Route path="/">
             <Header />
             <Home />
           </Route>
         </Switch>
       
       </div>
    </Router>
    
  );
}

export default App;
