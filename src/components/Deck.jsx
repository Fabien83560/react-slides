import React from 'react';
import { useFullScreen } from '../context/FullScreenContext';
import Slide from "./Slide.jsx";
import ToolBar from "./ToolBar.jsx";

import Image from "./Image";
import Title from "./Title";
import presentationImg from "../assets/presentation.png"

export default function Deck() {
    const { isFullScreen } = useFullScreen();
    
    const deckStyle = isFullScreen ? "m-0 shadow-none h-[95vh] overscroll-none" : "m-10 shadow-2xl h-[82vh] overscroll-none";
    
    return (
        <div className={deckStyle} style={{ position: 'relative' }}>
            <Slide>
                <Title text="Voici un Titre" position="center" />
                <Image filePath={presentationImg} imgName="Presentation" text="Voici une image très joli" />
            </Slide>
            <ToolBar />
        </div>
    );
}
