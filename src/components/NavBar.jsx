import { whileStatement } from "@babel/types";
import React, {useState} from "react"
import { AiOutlineMenu, AiOutlineClose,AiFillHome } from "react-icons/ai"




const Navbar = () => {
    const [nav,setNav] = useState(false)
    const style = {color:"white", opacity:"90%"}
    return ( 
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>        
        {/*Left Side*/}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} onClick = {()=> setNav(!nav)}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'> 
                    Top <span className='font-bold'>BBQ</span>
                </h1 >
                <div className='hidden lg:flex items-center'>
                    <p className='px-2'>Home</p>
                    <p className='px-2'> Restaraunt</p>  
                    <p className='px-2'>Menu</p>  
                    <p className='px-2'>Photos</p>  

                </div>
            </div>

            {/*Mobile Menu*/}
            {/*Overlay*/}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 lect-0'></div> : ''}
            {/*Side Drawer Menu*/}
            <div className={nav ? 'fixed top-0 left-0 w-screen h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >
                <AiOutlineClose style={style} size = {30} className='absolute left-4 top-4 cursor-pointer' onClick = {()=> setNav(!nav)}/>
                <div className='bg-black/95 h-screen'>
                    <nav>
                        <ul className='flex flex-col justify-center items-center h-screen '>
                            <h2 className='text-4xl fixed top-10 text-white'>Top <span className='font-bold'>BBQ</span></h2>
                            <li className='text-3xl pb-8 text-white/80 '>HOME</li>
                            <li className='text-3xl pb-8 text-white/80 flex-center'>RESTAURANT</li>
                            <li className='text-3xl pb-8 text-white/80'>MENU</li>
                            <li className='text-3xl pb-28 text-white/80'>PHOTOS</li>


                        </ul>
                    </nav>
                </div>
               
            </div>
            
        </div>
  );
};

export default Navbar;
