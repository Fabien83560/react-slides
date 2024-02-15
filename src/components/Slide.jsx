import { useSlideCount } from '../context/SlideCountContext.jsx';
import { useShowSlideNumber } from '../context/ShowSlideNumberContext.jsx';

export default function Slide({ children }) {
    const { currentSlide } = useSlideCount();
    const { showSlideNumber } = useShowSlideNumber();

    return (
        <div className="relative h-full">
            { showSlideNumber ? <button className="fixed right-5 py-2 px-4 rounded-full bg-transparent border border-blue-500">{currentSlide}</button> : ""}
            <div className="m-5">
                {children}
            </div>
        </div>
    );
}
