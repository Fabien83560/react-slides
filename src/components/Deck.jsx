import Slide from "./Slide.jsx";
import Button from "./Button.jsx";
import ToolBar from "./ToolBar.jsx";

export default function Deck({ isFullScreen, toggleFullScreen }) {
    const deckStyle = isFullScreen ? "m-0 shadow-none h-screen overscroll-none" : "m-10 shadow-2xl h-[82vh] overscroll-none";
    
    return (
        <div className={deckStyle} style={{ position: 'relative' }}>
            <Slide />
            <ToolBar toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen} />
        </div>
    );
}
