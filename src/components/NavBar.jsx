//import { whileStatement } from "@babel/types";
import React, {useState} from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import topBBQLogo from '../images/topBBQLogo.png'



const Navbar = () => {
    const [nav,setNav] = useState(false)
    const style = {color:"white", opacity:"90%"}
    return ( 
        <div className=' mx-auto flex justify-between items-center p-4 absolute top-0 z-50 w-full'>        
        {/*Left Side*/}
            <div className='cursor-pointer flex absolute left-4 top-4'>
                <AiOutlineMenu className='lg:hidden'style={style} size={30} onClick = {()=> setNav(!nav)}/>
            </div>
            <div className='flex items-center justify-center w-full'>
                
                <div className='flex justify-center items-center text-xl cursor-pointer text-white/70 '>
                    <p className='pr-8 sm-hidden '>HOME</p>
                    <p className='pr-8 sm-hidden'> RESTARAUNT</p>  
                    <img className='px-2 pr-6 opacity-80' src={topBBQLogo} />
                    <p className='pr-8 sm-hidden'>MENU</p>  
                    <p className='pr-8 sm-hidden'>PHOTOS</p>  

                </div>
            </div>

            {/*Mobile Menu*/}
            {/*Overlay*/}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 lect-0'></div> : ''}
            {/*Side Drawer Menu*/}
            <div className={nav ? 'fixed top-0 left-0 w-screen h-screen bg-white z-10 duration-700': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >
                <AiOutlineClose style={style} size = {30} className='absolute left-4 top-4 cursor-pointer' onClick = {()=> setNav(!nav)}/>
                <div className='bg-black/95 h-screen'>
                    <nav>
                        <div className='flex justify-center pt-6 '>
                            <img src={topBBQLogo} />
                        </div>
                        
                        <ul className='flex flex-col justify-center items-center h-screen '>
                            <li className='text-4xl pb-8 text-white/80 '>HOME</li>
                            <li className='text-4xl pb-8 text-white/80 flex-center'>RESTAURANT</li>
                            <li className='text-4xl pb-8 text-white/80'>MENU</li>
                            <li className='text-4xl pb-28 text-white/80'>PHOTOS</li>


                        </ul>
                    </nav>
                </div>
               
            </div>
            
        </div>
  );
};

export default Navbar;
