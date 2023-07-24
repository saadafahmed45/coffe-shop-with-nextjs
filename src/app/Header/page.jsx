import Navbar from '@/components/Navbar';
import React from 'react';
import bg from '../../images/background.webp'
const Header = ({ props }) => {

   return (
      <>
         <header className=" bg-cover bg-center" style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100vh',

         }}>
            <Navbar />

            <div className="p-5 m-5 ">
               <div className="mt-8" >
                  <h2 className="text-[80px] font-bold text-[#3ba733]  font-serif">We Are <br /> Opening Now..</h2>
                  <p className="text-4xl">511 Kelvin Squares</p>
               </div>
               <button className="mt-8 bg-[#3ba733] py-2 px-3 text-2xl rounded-lg hover:text-[#3ba733]
               hover:bg-white hover:translate-y-2
               ">Contact Us</button>
            </div>

         </header>
      </>
   );
};

export default Header;