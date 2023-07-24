import React from 'react';

const Navbar = () => {
   return (
      <div>
         <nav className=" bg-[#e290657e] h-[50] p-3 flex justify-between items-center  ">
            <div className=' text-[30px] text-white font-bold ml-5'>
               <h2>logo</h2>
            </div>
            <ul className='flex-row flex text-white text-[20px] font-semibold gap-10 mr-12
          
            '>
               <li className='hover:text-cyan-600 duration-150  hover:delay-150'><a href="/">Home</a></li>
               <li className='hover:text-cyan-600 duration-150  hover:delay-150'><a href="/">Abour</a></li>
               <li className='hover:text-cyan-600 duration-150  hover:delay-150'><a href="/">Service</a></li>
               <li className='hover:text-cyan-600 duration-150  hover:delay-150'><a href="/">Home</a></li>
            </ul>
         </nav>
      </div>
   );
};

export default Navbar;