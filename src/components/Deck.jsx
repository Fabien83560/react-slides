import { useEffect, useState } from 'react';

import { useFullScreen } from '../context/FullScreenContext';
import { useSlideCount } from '../context/SlideCountContext';
import Slide from "./Slide.jsx";
import ToolBar from "./ToolBar.jsx";
import '../css/custom-animation.css';

// Add your own import
import Image from "./Image";
import Title from "./Title";
import presentationImg from "../assets/presentation.png";

export default function Deck() {
    const { isFullScreen } = useFullScreen();
    const { currentSlide, setMaximumSlides } = useSlideCount();

    const [animationKey, setAnimationKey] = useState(0);
    const [prevSlide, setPrevSlide] = useState(currentSlide);
    const [animationDirection, setAnimationDirection] = useState('');

    const deckStyle = isFullScreen ? "m-0 shadow-none h-[95vh] overscroll-none" : "m-10 shadow-2xl h-[82vh] overscroll-none";

    const slides = [
        <Slide key={0}>
            <Title text="Voici un Titre 1" position="center" />
            <Image filePath={presentationImg} imgName="Presentation" text="Voici une image très jolie 1" />
        </Slide>,
        <Slide key={1}>
            <Title text="Voici un Titre 2" position="center" />
            <Image filePath={presentationImg} imgName="Presentation" text="Voici une image très jolie 2" />
        </Slide>,
        <Slide key={2}>
            <Title text="Voici un Titre 3" position="center" />
            <Image filePath={presentationImg} imgName="Presentation" text="Voici une image très jolie 3" />
        </Slide>,
        <Slide key={3}>
            <Title text="Voici un Titre 4" position="center" />
            <Image filePath={presentationImg} imgName="Presentation" text="Voici une image très jolie 4" />
        </Slide>
    ];

    useEffect(() => {
        setMaximumSlides(slides.length);
    }, [slides.length]);

    useEffect(() => {
        // Force réapplication of the animation
        setAnimationKey(prevKey => prevKey + 1);
    
        const newDirection = currentSlide > prevSlide ? 'animate-slideLeft' : 'animate-slideRight';
        setAnimationDirection(newDirection);
    
        setPrevSlide(currentSlide);
    }, [currentSlide]);
    

    return (
        <div className={`${deckStyle} relative overflow-hidden`}>
            <div key={animationKey} className={`absolute w-full h-full ${animationDirection}`}>
                {slides[currentSlide - 1]}
            </div>
            <ToolBar />
        </div>
    );
}