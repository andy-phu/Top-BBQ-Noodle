import React from 'react';

const Description = () => {
    return (
        <div className='py-12 flex items-center w-screen justify-center text-2xl' id='restaurant'>
            <div className='flex flex-col ml-5 sm:flex-row sm:max-w-5xl justify-center text-base '>
                <div className='text-lg flex grow-2 flex-col pr-14 font-bold '>
                    <h1 className=' font-bold pb-10 text-3xl' >A DESTINATION</h1>
                    <p className='text-gray-400 font-bold pb-6'> Welcome to The Taste of Asian Cuisine, where we offer a delightful range of Oriental noodles, succulent BBQ duck, flavorful pork dishes, savory dim sum, juicy lobster, and more. Our top BBQ-noodle is made using the Hong Kong style, ensuring an authentic taste that will leave you craving for more.

Our restaurant offers an elegant ambiance, making it the perfect place to enjoy an unforgettable evening of exceptional cuisine. Our expert chefs use only the freshest and finest ingredients to create bold and nuanced flavors that will tantalize your taste buds.

Experience the art of Chinese barbecue with us and indulge in the refined flavors of our dishes. We take pride in offering an authentic and refined Chinese barbecue experience that is unmatched in taste and quality.</p>
                </div>
                <div className=' flex grow flex-col w-full text-gray-400 '>
                    <div  className='pb-4'>
                        <p className=''>PHONE</p>
                        <p>(310) 819-8413</p>
                    </div>
                    <div  className='pb-4'>
                        <p className=''>EMAIL</p>
                        <p>topbbqnoodle@gmail.com</p>
                    </div>
                    <div className='pb-4'>
                        <p className=''>LOCATION</p>
                        <p> 1425 Artesia Blvd UNIT 21</p>
                        <p>Gardena, CA 90248</p>
                    </div>
                    <div className='pb-4'>
                        <p className='' >HOURS</p>
                        <p> <span className=' font-bold text-gray-500'> Mon-Sun</span> 10AM-8:30PM</p>                            
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Description;