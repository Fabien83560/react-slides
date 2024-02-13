import React, { useState, useEffect } from 'react';
import { useFullScreen } from '../context/FullScreenContext.jsx';
import { useSlideCount } from '../context/SlideCountContext';
import Button from "./Button";

export default function ToolBar() {
    const { isFullScreen , toggleFullScreen  } = useFullScreen();
    const { currentSlide, maxSlides, goToSlide } = useSlideCount();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const showToolBar = window.innerHeight - 100;
            if (event.clientY > showToolBar) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        if (isFullScreen) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isFullScreen]);

    let addStyle = isVisible ? "bg-gray-700 py-3" : "hidden";
    if(!isFullScreen) {
        addStyle = "bg-gray-700 py-3";
    }

    let butttonTextColor = isVisible || !isFullScreen ? "text-white" : "text-black";
    const combinedStyle = `fixed inset-x-0 bottom-0 ${addStyle}`;
    return (
        <nav className={combinedStyle} >
            <div className="flex justify-between items-center w-full px-10">
                <Button text={(isFullScreen) ? "Exit Full Screen" : "Full Screen"} onClick={toggleFullScreen} transparent={true} textColor={butttonTextColor} />
                <div className="flex gap-2">
                    <Button onClick={() => goToSlide(1)} text="<<" transparent={true} textColor={butttonTextColor} />
                    <Button onClick={() => goToSlide(currentSlide - 1)} text="<" transparent={true} textColor={butttonTextColor} />
                    <Button text={`${currentSlide}/${maxSlides}`} transparent={true} textColor={butttonTextColor} />
                    <Button onClick={() => goToSlide(currentSlide + 1)} text=">" transparent={true} textColor={butttonTextColor} />
                    <Button onClick={() => goToSlide(maxSlides)} text=">>" transparent={true} textColor={butttonTextColor} />
                </div>

                <Button text="Settings" transparent={true} textColor={butttonTextColor} />
            </div>
        </nav>
    );
}
