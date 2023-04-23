import React from 'react';
import topBBQFriedRice from '../images/topBBQFriedRice.jpeg';
import topBBQCharSiu from '../images/topBBQCharSiu.jpeg';
import topBBQPorkBelly from '../images/topBBQPorkBelly.jpeg';
import topBBQShumai from '../images/topBBQShumai.jpeg';
import topBBQChowFun from '../images/topBBQChowFun.jpeg';

import { Carousel} from 'react-bootstrap';

const PhotoGallery = () => {
    return (
        <div id='photos'>
            <Carousel className='flex h-screen w-screen w-100 mb-0'>
            <Carousel.Item interval={1000}>
                <img 
                className="d-block w-100  h-screen w-screen  object-cover"
                src={topBBQCharSiu}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='font-bold pb-4 relative'>CHAR SIU</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQPorkBelly}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 className='font-bold pb-4'>CRISPY PORK BELLY</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQFriedRice}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className='font-bold pb-4'>SHRIMP FRIED RICE</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQShumai}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className='font-bold pb-4'>SHU MAI</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQChowFun}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className='font-bold pb-4'>CHOWFUN</h1>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </div>
        
        
    );
}

export default PhotoGallery;