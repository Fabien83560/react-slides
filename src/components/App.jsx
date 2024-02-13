import Deck from "./Deck.jsx";
import ToolBar from "./ToolBar.jsx";
import { useSlideCount } from '../context/SlideCountContext';

export default function App() {
    const { setMaximumSlides } = useSlideCount();

    return (
        <>
            <Deck />
            <ToolBar />
        </>
    );
}
