import Slide from "./Slide.jsx";
import Button from "./Button.jsx";

export default function Deck({ isFullScreen, toggleFullScreen }) {
    const deckStyle = isFullScreen ? "m-0 shadow-none h-screen overscroll-none" : "m-10 shadow-2xl h-[82vh] overscroll-none";
    
    const buttonTextColor = isFullScreen ? "text-black" : "text-white";

    return (
        <div className={deckStyle} style={{ position: 'relative' }}>
            {isFullScreen && (
                <div className="absolute bottom-4 left-0 m-4 z-50">
                    <Button text="Exit Full Screen" onClick={toggleFullScreen} transparent={true} additionalClasses={buttonTextColor}
                    />
                </div>
            )}
            <Slide />
        </div>
    );
}
