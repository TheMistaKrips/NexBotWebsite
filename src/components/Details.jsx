import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import styles
import { Carousel } from 'react-responsive-carousel';
import Img1 from '../assets/Images/img1.jpg'
import Img2 from '../assets/Images/img2.jpg'
import Img3 from '../assets/Images/img3.jpg'


function Details() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-[#e3e3e3] text-white rounded-lg w-96 mb-auto mt-2 mr-2 z-10">

            <div className="bg-[#e3e3e3] rounded-md overflow-hidden mb-4 ">
                <Carousel
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    autoPlay
                    interval={3000}
                    swipeable
                    emulateTouch
                    stopOnHover
                    onChange={handleSlideChange}
                >
                    <div>
                        <img src={Img1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={Img2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={Img3} alt="Slide 3" />
                    </div>
                </Carousel>
            </div>

            <div className="bg-[#090909] rounded-lg p-4 h-64">

            </div>
        </div>
    )
}

export default Details
