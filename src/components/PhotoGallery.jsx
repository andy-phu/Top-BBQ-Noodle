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

                />
                <Carousel.Caption>
                    <h1 className='font-bold '>CHAR SIU</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQPorkBelly}

                />
                <Carousel.Caption>
                    <h1 className='font-bold'>CRISPY PORK BELLY</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQFriedRice}

                />
                <Carousel.Caption>
                    <h1 className='font-bold'>SHRIMP FRIED RICE</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQShumai}
                />
                <Carousel.Caption>
                    <h1 className='font-bold'>SHU MAI</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100 h-screen w-screen object-cover"
                src={topBBQChowFun}

                />
                <Carousel.Caption>
                    <h1 className='font-bold'>CHOW FUN</h1>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </div>
        
        
    );
}

export default PhotoGallery;