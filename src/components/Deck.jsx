import { useEffect, useState } from 'react';

import { useFullScreen } from '../context/FullScreenContext';
import { useSlideCount } from '../context/SlideCountContext';
import { useShowSlideNumber } from '../context/ShowSlideNumberContext.jsx';
import '../css/custom-animation.css';
import { textColorStyle, backgroundColorStyle } from '../css/style.js';

// Add your own import
import presentationImg from "../assets/presentation.png";
import Slide from "./Slide.jsx";
import Image from "./Image.jsx";
import Title from "./Title";
import Figure from './Figure.jsx';
import Paragraph from './Paragraph.jsx';
import List from './List.jsx';
import Table from './Table.jsx';
import TwoColumn from './TwoColumn.jsx';
import Markdown from './Markdown.jsx';

export default function Deck() {
    const { isFullScreen } = useFullScreen();
    const { currentSlide, setMaximumSlides } = useSlideCount();
    const { showSlideNumber } = useShowSlideNumber();

    const [animationKey, setAnimationKey] = useState(0);
    const [prevSlide, setPrevSlide] = useState(currentSlide);
    const [animationDirection, setAnimationDirection] = useState('');

    const slides = [
        <Slide>
            <Title text="Voici un Titre à gauche" position="left" size={6} textColor="yellow" backgroundColor="red" />
            <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à gauche" position="left" textSize={6} textColor="lightBlue" backgroundColor="purple" />
        </Slide>,
        <Slide>
            <Title text="Voici un Titre au centre" position="center" size={4} />
            <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à droite" position="right" />
        </Slide>,
        <Slide>
            <Title text="Voici un Titre à gauche" position="left" size={4} />
            <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à droite" position="right" />
        </Slide>,
        <Slide>
            <Title text="Voici un Titre au centre" position="center" size={9} />
            <Image filePath={presentationImg} imgName="Presentation" position="left" size={32} />
        </Slide>,
        <Slide>
            <Paragraph text="Aenean laoreet varius ipsum, sed vestibulum erat sagittis quis. Donec euismod odio quam. Nulla eu sapien neque. 
            Proin blandit sit amet velit dictum fermentum. Sed pellentesque condimentum dolor quis consequat. Maecenas gravida efficitur tellus, 
            nec pellentesque enim facilisis luctus. Aenean scelerisque, lacus vel accumsan pellentesque, lectus tellus blandit purus, quis molestie 
            diam eros quis sapien. Duis eu maximus justo, ac rutrum leo. Quisque posuere auctor lacus, et interdum eros interdum sit amet. 
            Nunc sed nisl vel neque rutrum sollicitudin. "/>
        </Slide>,
        <Slide>
            <List tabElement={["value1","value2","value3"]} type="bulleted" textColor="red" backgroundColor="green" />
        </Slide>,
        <Slide>
            <List tabElement={["value1","value2","value3"]} type="decimal" />
        </Slide>,
        <Slide>
            <List tabElement={["value1","value2","value3"]} />
        </Slide>,
        <Slide>
            <Table tabElement={[["1.1","1.2","1.3","1.4","1.5","1.6"],
                                ["2.1","2.2","2.3","2.4","2.5","2.6"],
                                ["3.1","3.2","3.3","3.4","3.5","3.6"],
                                ["4.1","4.2","4.3","4.4","4.5","4.6"],
                                ["5.1","5.2","5.3","5.4","5.5","5.6"],
                                ["6.1","6.2","6.3","6.4","6.5","6.6"]]} textColor="red" />
        </Slide>,
        <Slide>
            <TwoColumn 
            leftColumn={[
                <Title text="Voici un Titre au centre" position="center" size={2} />,
                <Image filePath={presentationImg} imgName="Presentation" position="left" backgroundColor="lightBlue" />
            ]}
            rightColumn={[
                <Figure filePath={presentationImg} imgName="Presentation" text="Voici une image à gauche" position="left" textSize={6} textColor="lightBlue" backgroundColor="purple" imgBackgroundColor="yellow" />,
                <Paragraph text="Aenean laoreet varius ipsum, sed vestibulum erat sagittis quis. Donec euismod odio quam. Nulla eu sapien neque. 
                Proin blandit sit amet velit dictum fermentum. Sed pellentesque condimentum dolor quis consequat. Maecenas gravida efficitur tellus, 
                nec pellentesque enim facilisis luctus. Aenean scelerisque, lacus vel accumsan pellentesque, lectus tellus blandit purus, 
                quis molestie diam eros quis sapien. Duis eu maximus justo, ac rutrum leo. Quisque posuere auctor lacus, et interdum eros interdum sit amet. 
                Nunc sed nisl vel neque rutrum sollicitudin." textColor="fuchsia" backgroundColor="darkPink" />
            ]}
            />
        </Slide>,
        <Slide>
            <TwoColumn 
                leftColumn={[
                    <Title text="Voici les couleurs de texte" />,
                    ...Object.keys(textColorStyle).map(colorName => (
                        <Paragraph text={colorName} textColor={colorName} size={16} />
                    ))
                ]}
                rightColumn={[
                    <Title text="Voici les couleurs de background" />,
                    ...Object.keys(textColorStyle).map(colorName => (
                        <Paragraph text={colorName} textColor="white" backgroundColor={colorName} size={16} />
                    ))
                ]}
            />
        </Slide>,
        <Slide>
            <Markdown />
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
        </div>
    );
}