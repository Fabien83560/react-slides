import { React, useState, useEffect } from 'react';
import { useFullScreen } from '../context/FullScreenContext.jsx';
import { useSlideCount } from '../context/SlideCountContext';
import { useShowSlideNumber } from '../context/ShowSlideNumberContext.jsx';
import Button from "./Button";

export default function ToolBar() {
    const { isFullScreen, toggleFullScreen, setIsFullScreen } = useFullScreen();
    const { currentSlide, maxSlides, goToSlide, incrementCurrentSlide, decrementCurrentSlide } = useSlideCount();
    const { showSlideNumber, toggleShowSlideNumber } = useShowSlideNumber();
    const [isVisible, setIsVisible] = useState(false);
    const [inputShown, setInputShown] = useState(false);
    const [inputValue, setInputValue] = useState(currentSlide);

    // When Full-Screen is enable
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

    const handleInputToggle = () => {
        setInputShown(!inputShown);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                const pageNumber = Math.max(1, Math.min(maxSlides, Number(inputValue)));
                goToSlide(pageNumber);
                setInputShown(false);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    decrementCurrentSlide();
                    break;
                case 'ArrowRight':
                    incrementCurrentSlide();
                    break;
                case 'Escape':
                    if (isFullScreen) {
                        setIsFullScreen(false);
                    }
                    break;
                case 'F11':
                    e.preventDefault();
                    toggleFullScreen();
                    break;
                default:
                    break;
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [incrementCurrentSlide, decrementCurrentSlide, isFullScreen, setIsFullScreen, toggleFullScreen]);
    

    let addStyle = isVisible ? "bg-gray-700 py-3" : "hidden";
    if (!isFullScreen) {
        addStyle = "bg-gray-700 py-3";
    }

    let buttonTextColor = "text-white";
    const combinedStyle = `fixed inset-x-0 bottom-0 ${addStyle}`;
    return (
        <nav className={combinedStyle} >
            <div className="flex justify-between items-center w-full px-10">
                <Button text={(isFullScreen) ? "Exit Full Screen" : "Full Screen"} onClick={toggleFullScreen} transparent={true} textColor={buttonTextColor} />
                <div className="flex gap-2">
                    <Button onClick={() => goToSlide(1)} text="<<" transparent={true} textColor={buttonTextColor} />
                    <Button onClick={() => decrementCurrentSlide()} text="<" transparent={true} textColor={buttonTextColor } />
                    {inputShown ? (
                        <input
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleInputKeyPress}
                            className="text-lg p-2 border rounded"
                            autoFocus
                        />
                    ) : (
                        <Button
                            onClick={handleInputToggle} 
                            text={`${currentSlide} / ${maxSlides}`}
                            transparent={true} 
                            textColor={buttonTextColor}
                        />
                    )}
                    <Button onClick={() => incrementCurrentSlide()} text=">" transparent={true} textColor={buttonTextColor} />
                    <Button onClick={() => goToSlide(maxSlides)} text=">>" transparent={true} textColor={buttonTextColor} />
                </div>

                <Button text={(showSlideNumber) ? "Hide Slide Number" : "Show Slide Number"} onClick={toggleShowSlideNumber} transparent={true} textColor={buttonTextColor} />
            </div>
        </nav>
    );
}
