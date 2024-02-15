import React, { createContext, useContext, useState } from 'react';

const SlideCountContext = createContext();

export const useSlideCount = () => useContext(SlideCountContext);

export const SlideCountProvider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [maxSlides, setMaxSlides] = useState(1);
    
    const goToSlide = (slideIndex) => {
        if(slideIndex >= 1 && slideIndex <= maxSlides) {
            setCurrentSlide(slideIndex);
        }
    };

    const incrementCurrentSlide = () => {
        if(currentSlide < maxSlides) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const decrementCurrentSlide = () => {
        if(currentSlide > 1) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const setMaximumSlides = (count) => {
        setMaxSlides(count);
        if(currentSlide > count) {
            setCurrentSlide(count);
        }
    };

    return (
        <SlideCountContext.Provider value={{
            currentSlide, 
            maxSlides, 
            goToSlide, 
            setMaximumSlides,
            incrementCurrentSlide,
            decrementCurrentSlide,
        }}>
            {children}
        </SlideCountContext.Provider>
    );
};
