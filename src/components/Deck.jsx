import { useEffect, useState } from 'react';

import { useFullScreen } from '../context/FullScreenContext';
import { useSlideCount } from '../context/SlideCountContext';
import { useShowSlideNumber } from '../context/ShowSlideNumberContext.jsx';
import Slide from "./Slide.jsx";
import ToolBar from "./ToolBar.jsx";
import Mosaique from './Mosaique.jsx';
import '../css/custom-animation.css';

// Add your own import
import presentationImg from "../assets/presentation.png";
import Image from "./Image.jsx";
import Title from "./Title";
import Figure from './Figure.jsx';
import Paragraph from './Paragraph.jsx';

export default function Deck() {
    const { isFullScreen } = useFullScreen();
    const { currentSlide, setMaximumSlides } = useSlideCount();
    const { showSlideNumber } = useShowSlideNumber();

    const [animationKey, setAnimationKey] = useState(0);
    const [prevSlide, setPrevSlide] = useState(currentSlide);
    const [animationDirection, setAnimationDirection] = useState('');

    const slides = [
        <Slide>
            <Title text="Voici un Titre à gauche" position="left" />
            <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à gauche" position="left" />
        </Slide>,
        <Slide>
            <Title text="Voici un Titre au centre" position="center" />
            <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à droite" position="right" />
        </Slide>,
        <Slide>
            <Title text="Voici un Titre à gauche" position="left" />
            <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à droite" position="right" />
        </Slide>,
        <Slide>
            <Title text="Voici un Titre au centre" position="center" />
            <Image filePath={presentationImg} imgName="Presentation" position="left" />
        </Slide>,
        <Slide>
            <Paragraph text="Aenean laoreet varius ipsum, sed vestibulum erat sagittis quis. Donec euismod odio quam. Nulla eu sapien neque. Proin blandit sit amet velit dictum fermentum. Sed pellentesque condimentum dolor quis consequat. Maecenas gravida efficitur tellus, nec pellentesque enim facilisis luctus. Aenean scelerisque, lacus vel accumsan pellentesque, lectus tellus blandit purus, quis molestie diam eros quis sapien. Duis eu maximus justo, ac rutrum leo. Quisque posuere auctor lacus, et interdum eros interdum sit amet. Nunc sed nisl vel neque rutrum sollicitudin. "/>
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
    
    const deckStyle = isFullScreen ? "m-0 shadow-none h-[95vh] overscroll-none" : "m-10 shadow-2xl h-[82vh] overscroll-none";

    return (
        <div className={`${deckStyle} relative overflow-hidden`}>
            { showSlideNumber ? <button className="fixed right-5 top-5 py-2 px-4 rounded-full bg-transparent border border-blue-500">{currentSlide}</button> : ""}
            <div key={animationKey} className={`absolute w-full h-full ${animationDirection}`}>
                {slides[currentSlide - 1]}
            </div>
            <Mosaique slides={slides} />
            <ToolBar />
        </div>
    );
}