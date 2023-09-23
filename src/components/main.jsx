import React from 'react';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twet from '../assets/twet.svg';

function Main() {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-8 mt-5">
                  <h1 className="text-white heading">
                     Plants make a<br />
                     Positive impact on<br />
                     your environment.
                  </h1>
                  <p className="mt-5 text-white">
                     What sets Earth apart from other planets is its ability to sustain life. Plants are considered a critical <br />
                     resource because of the many ways they support life on Earth.
                  </p>
                  <button type="button" className="btn btn1 btn-success mt-5 text-black">Book Now</button>
                  <button type="button" className="btn btn2 btn-outline-success mt-5 ms-5">Know More</button>
                  <p className="mt-4">
                     You will get a 30-day free trial
                  </p>
               </div>
            </div>
            <div className="contact">
               <img className="mt-2" src={facebook} alt="facebook" />
               <img className="mt-2 ms-3" src={insta} alt="instagram" />
               <img className="mt-2 ms-3" src={twet} alt="twitter" />
            </div>
         </div>
      </>
   );
}

export default Main;
