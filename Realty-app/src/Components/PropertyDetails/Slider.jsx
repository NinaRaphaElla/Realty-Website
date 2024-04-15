import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SliderImg() {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1712928247899-2932f4c7dea3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://media.istockphoto.com/id/1655115306/photo/interior-wall-mockup.jpg?s=612x612&w=0&k=20&c=PS4eAiFb3YPJGKmMlcnE5A9ddWhwruVXl2q4mP-DsAc='
        },
        {
            url: 'https://media.istockphoto.com/id/1346607516/photo/cabinet-in-living-room-with-tatami-mat-floor-and-sofa-armchair-design-3d-rendering.jpg?s=612x612&w=0&k=20&c=26uISiVtsmLmFBLXp5C3sJNGUVjClgaq83Mnc5GasJU='
        },
        {
            url: 'https://media.istockphoto.com/id/478197982/photo/luxury-house-interior-bright-elegant-dining-area.jpg?s=2048x2048&w=is&k=20&c=YXq13d-ceoGpKjiUIwQwjZ1yjCAfUoyQ8jSdXh5Ecxc='
        },
        {
            url: 'https://media.istockphoto.com/id/1824615199/photo/orange-sofa-in-cozy-living-room-interior-with-pastel-green-wall-and-wood-furniture-wall.jpg?s=612x612&w=0&k=20&c=ysyQe6R17y6nh9qc4-CghkfwxsOuS-SPBsW-P7Jmzwg='
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
    <div className='max-w-[1400px] h-[650px] w-full m-auto py-24 px-4 relative group'>
        <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})`}} 
            className='w-full h-full bg-center bg-cover duration-500'>
            </div>
    {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-white cursor-pointer'>
            <MdKeyboardArrowLeft onClick={prevSlide} size={30} />
        </div>
    {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-white cursor-pointer'>
            <MdKeyboardArrowRight onClick={nextSlide} size={30}/>
        </div>
    </div>
);
    
}

export default SliderImg;
