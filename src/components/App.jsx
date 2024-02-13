import React, { useEffect } from 'react'; // Importer useEffect
import Deck from "./Deck.jsx";
import ToolBar from "./ToolBar.jsx";
import { useSlideCount } from '../context/SlideCountContext';

export default function App() {
    const { setMaximumSlides } = useSlideCount();
    
    useEffect(() => {
        setMaximumSlides(15);
    }, []);

    return (
        <>
            <Deck />
            <ToolBar />
        </>
    );
}
