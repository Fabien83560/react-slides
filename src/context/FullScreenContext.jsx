import React, { createContext, useContext, useState } from 'react';

const FullScreenContext = createContext();

export function useFullScreen() {
    return useContext(FullScreenContext);
}

export const FullScreenProvider = ({ children }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

    return (
        <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
            {children}
        </FullScreenContext.Provider>
    );
};
