import React from 'react'
import topBBQNoodle from '../images/topBBQNoodle.jpeg'
const Hero = () =>{
    return(
        <div  id='hero'  className='mx-auto h-screen'>
            <div className='bg-green-500 h-full w-full h-screen relative' >
                {/*Overlay */}
                <div className='absolute w-full h-full text-gray-200 bg-black/40 flex flex-col justify-center items-center h-screen' >
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold pb-6'>TASTE THE</h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold'>DIFFERENCE</h1>
                </div>
                <img className='h-screen w-full w-screen object-cover' src={topBBQNoodle} alt="hero"/>
                
            </div>

            {/*description */}
            
        </div>

            
        
    )
}

export default Hero