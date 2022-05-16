import React from "react";
import prime from "./prime.jpg";
import './home.css';
import Product from "./Product";
import iphone from "./iphone.jpg";
import book from "./book.jpg";
import ac from "./ac.png";
import car from "./car.jpg";
import sneaker from "./sneakers.jpg";
import tshirt from "./tshirt.jpg";
function Home(){
    return(
       <div className="home">
          <div className="home_container">
              <img className="home_image" src={prime} alt="PRIME VIDEO"/>
          </div>
            
          <div className="home_row">
            <Product id="1" title='Iphone 13' price='1,30,000' image={iphone} rating='5' />
            <Product id="2" title='3 Mistakes of my Life ' price='1,000' image={book} rating='3'/>
          </div>
          
          <div className="home_row">
          <Product id="3" title='Netted Tops' price='900' image={tshirt} rating='3.5'/>
          <Product id="4" title='Nike Jorden' price='10,000' image={sneaker} rating='4.5'/>
          <Product id="5" title='Air Conditioner ' price='30,000' image={ac} rating='3'/>
          </div>

          <div className="home_row">
          <Product id="6" title='The Rolls Royce ' price='6 Crores' image={car} rating='5'/>
          </div>

       </div>




    );
}
export default Home;

//<Product/>