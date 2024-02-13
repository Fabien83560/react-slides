
import React, { createContext, useContext, useState } from 'react';

const SlideCountContext = createContext();

export const SlideCountProvider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [maxSlides, setMaxSlides] = useState(0);
    
    const goToSlide = (slideIndex) => {
        if(slideIndex >= 1 && slideIndex < maxSlides + 1) {
            setCurrentSlide(slideIndex);
        }
    };

    const setMaximumSlides = (count) => {
        setMaxSlides(count);
    };

    return (
        <SlideCountContext.Provider value={{ currentSlide, maxSlides, goToSlide, setMaximumSlides }}>
            {children}
        </SlideCountContext.Provider>
    );
};

export const useSlideCount = () => useContext(SlideCountContext);