import React, { useState } from 'react';
import Deck from "./Deck.jsx";
import ToolBar from "./ToolBar.jsx";

export default function App() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

    return (
        <>
            <Deck isFullScreen={isFullScreen} toggleFullScreen={toggleFullScreen}/>
            {!isFullScreen && <ToolBar toggleFullScreen={toggleFullScreen} />}
        </>
    );
}
