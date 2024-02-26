import { useEffect, useState } from 'react';

import { useFullScreen } from '../context/FullScreenContext';
import { useSlideCount } from '../context/SlideCountContext';
import { useShowSlideNumber } from '../context/ShowSlideNumberContext.jsx';
import { useSlides } from '../context/SlidesContext.jsx';
import '../css/custom-animation.css';

export default function Deck() {
    const { isFullScreen } = useFullScreen();
    const { currentSlide, setMaximumSlides } = useSlideCount();
    const { showSlideNumber } = useShowSlideNumber();
    const { slides } = useSlides();

    const [animationKey, setAnimationKey] = useState(0);
    const [prevSlide, setPrevSlide] = useState(currentSlide);
    const [animationDirection, setAnimationDirection] = useState('');

    const getCurrentSlide = () => {
        if(currentSlide >= 1 && currentSlide <= slides.length) {
            return slides[currentSlide - 1]();
        }
        else {
            return slides[0];
        }
    };

    useEffect(() => {
        setMaximumSlides(slides.length);
    }, []);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
        const newDirection = currentSlide > prevSlide ? 'animate-slideLeft' : 'animate-slideRight';
        setAnimationDirection(newDirection);
        setPrevSlide(currentSlide);
    }, [currentSlide]);

    const deckStyle = isFullScreen ? "m-0 shadow-none h-[95vh] overscroll-none" : "m-10 shadow-2xl h-[75vh] overscroll-none";

    return (
        <div className={`${deckStyle} relative overflow-hidden`}>
            {showSlideNumber && <button className="fixed right-5 top-5 py-2 px-4 rounded-full bg-transparent border border-blue-500">{currentSlide}</button>}
            <div key={animationKey} className={`absolute w-full h-full ${animationDirection}`}>
                {getCurrentSlide()}
            </div>
        </div>
    );
}