import { FullScreenProvider } from '../context/FullScreenContext.jsx';
import { SlideCountProvider } from '../context/SlideCountContext.jsx';
import App from './App.jsx';

export default function Context() {
    return (
        <>
            <FullScreenProvider>
                <SlideCountProvider>
                    <App />
                </SlideCountProvider>
            </FullScreenProvider>
        </>
    );
}
