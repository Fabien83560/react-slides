import React, { useRef } from 'react';
import { useSlides } from '../context/SlidesContext';
import { useSlideCount } from '../context/SlideCountContext';

export default function Mosaique() {
    const { slides } = useSlides();
    const { currentSlide , goToSlide } = useSlideCount();
    const sliderRef = useRef(null);

    const scrollSlides = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: direction * 500, behavior: 'smooth' });
        }
    };

    return (
        <div className="bottom-0 left-0 right-0 z-10 py-2">
            <div className="flex justify-between items-center mx-4">
                <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => scrollSlides(-1)}>
                    &#10094;
                </button>
                <div ref={sliderRef} className="flex overflow-x-auto scroll-smooth px-2" style={{ scrollbarWidth: 'none' }}>
                    {slides.map((_, index) => (
                        <div key={index}
                            className={`flex-none w-20 h-16 bg-gray-100 border-2 ${
                              currentSlide === index + 1 ? 'border-red-500' : 'border-gray-300'
                            } rounded flex items-center justify-center m-1 cursor-pointer hover:bg-gray-200`}
                            onClick={() => goToSlide(index + 1)}>
                            <span className="text-xs font-semibold">
                                Diapo n°{index + 1}
                            </span>
                        </div>
                    ))}
                </div>
                <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800" onClick={() => scrollSlides(1)}>
                    &#10095;
                </button>
            </div>
        </div>
    );
}
