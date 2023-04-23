import React from 'react';

const Description = () => {
    return (
        <div className='py-12 flex items-center w-screen justify-center text-2xl' id='restaurant'>
            <div className='flex flex-col ml-5 sm:flex-row sm:max-w-5xl justify-center text-base '>
                <div className='text-lg flex grow-2 flex-col pr-14 font-bold '>
                    <h1 className=' font-bold pb-10 text-2xl' >A DESTINATION</h1>
                    <p className='text-gray-400 font-bold pb-6'> Experience authentic and refined Chinese barbecue at our elegant restaurant. Our expert chefs use only the freshest and finest ingredients to create bold and nuanced flavors. Indulge in the art of Chinese barbecue and discover why our restaurant is the perfect destination for an exquisite dining experience. Join us for an unforgettable evening of exceptional cuisine and elevated ambiance.</p>
                </div>
                <div className=' flex grow flex-col w-full text-gray-400 '>
                    <div  className='pb-8'>
                        <p className='pb-2'>PHONE</p>
                        <p>(310) 819-8413</p>
                    </div>
                    <div className='pb-4'>
                        <p className='pb-2'>LOCATION</p>
                        <p> 1425 Artesia Blvd UNIT 21</p>
                        <p>Gardena, CA 90248</p>
                    </div>
                    <div className='pb-4'>
                        <p className='pb-2' >HOURS</p>
                        <p> <span className=' font-bold text-gray-500'> Mon-Sun</span> 10AM-8:30PM</p>                            
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Description;