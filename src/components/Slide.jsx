import { useSlideCount } from '../context/SlideCountContext.jsx';

export default function Slide({ children }) {
    const { currentSlide } = useSlideCount();
    
    return (
        <div className="relative h-full">
            <div className="m-5">
                {children}
            </div>
        </div>
    );
}
