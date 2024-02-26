import React, { useRef, useState, useEffect } from 'react';
import { useSlides } from '../context/SlidesContext';
import { useSlideCount } from '../context/SlideCountContext';

export default function Mosaique() {
    const [width, setWidth] = useState(window.innerWidth);
    const { slides } = useSlides();
    const { currentSlide, goToSlide } = useSlideCount();
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const totalSlidesWidth = slides.length * 150;
    const showNavigation = totalSlidesWidth > width;

    const scrollSlides = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: direction * 500, behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-20 left-0 right-0 z-10 py-2">
            <div className={`flex ${showNavigation ? 'justify-between' : 'justify-center'} items-center mx-4`}>
                {showNavigation && (
                    <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => scrollSlides(-1)}>
                        &#10094;
                    </button>
                )}
                <div ref={sliderRef} className={`flex ${showNavigation ? '' : 'justify-center'} overflow-x-auto scroll-smooth px-2`} style={{ scrollbarWidth: 'none' }}>
                    {slides.map((_, index) => (
                        <div key={index}
                            className={`flex-none w-20 h-16 bg-gray-100 border-2 ${
                              currentSlide === index + 1 ? 'border-red-500' : 'border-gray-300'
                            } rounded flex items-center justify-center m-1 cursor-pointer hover:bg-gray-200`}
                            onClick={() => goToSlide(index + 1)}>
                            <span className="text-xs font-semibold">Diapo n°{index + 1}</span>
                        </div>
                    ))}
                </div>
                {showNavigation && (
                    <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => scrollSlides(1)}>
                        &#10095;
                    </button>
                )}
            </div>
        </div>
    );
}