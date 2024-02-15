import { FullScreenProvider } from '../context/FullScreenContext.jsx';
import { SlideCountProvider } from '../context/SlideCountContext.jsx';
import { ShowSlideNumberProvider } from '../context/ShowSlideNumberContext.jsx';
import App from './App.jsx';

export default function Context() {
    return (
        <>
            <FullScreenProvider>
                <SlideCountProvider>
                    <ShowSlideNumberProvider>
                        <App />
                    </ShowSlideNumberProvider>
                </SlideCountProvider>
            </FullScreenProvider>
        </>
    );
}
