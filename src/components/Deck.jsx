import React from 'react';
import { useFullScreen } from '../context/FullScreenContext';
import Slide from "./Slide.jsx";
import ToolBar from "./ToolBar.jsx";

export default function Deck() {
    const { isFullScreen } = useFullScreen();
    
    const deckStyle = isFullScreen ? "m-0 shadow-none h-screen overscroll-none" : "m-10 shadow-2xl h-[82vh] overscroll-none";
    
    return (
        <div className={deckStyle} style={{ position: 'relative' }}>
            <Slide />
            <ToolBar />
        </div>
    );
}
