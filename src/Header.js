import React from "react";
import './Header.css';
import amazon from "./amazon.png";
import search from "./search.png";
import cart from "./cart.png";
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
//import SearchIcon from '@mui/icons-material/Search';
//import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function Header(){

    const [{basket,user},dispatch]= useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }


    return(
        <div className="header">
            <a href="/">
            <img className="header_logo" src={amazon}/>
            </a>

             <div className="header_search">
                 <input className="header_searchinput" type="text"/>
                 <img className="header_searchicon" src={search}/>
             </div>
        
             <div className="header_nav">
                 <a href={!user &&'/login'}>
                 <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option_1">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className="header_option_2">
                       {user? 'Sign Out':'Sign In'}
                    </span>
                 </div>
                 </a>

                 <div className="header_option">
                     <a href="/orders">
                    <span className="header_option_1">
                        Returns
                    </span>
                    <span className="header_option_2">
                        And Orders
                    </span>
                    </a>
                 </div>

                 <div className="header_option">
                    <span className="header_option_1">
                        Your
                    </span>
                    <span className="header_option_2">
                        Prime
                    </span>
                 </div>
                 <a href="/checkout">
                 <div className="header_cart">
                 <img src={cart}/>
                 <span className="header_option_2 header_cart header_cartcount"> {basket?.length}</span>
                 </div> 
                 </a>

             </div>
        
        
        </div>
    );
}
export default Header;
//<SearchIcon className="header_searchicon"/> 