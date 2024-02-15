import React, { createContext, useContext, useState } from 'react';

const ShowSlideNumberContext = createContext();

export function useShowSlideNumber() {
    return useContext(ShowSlideNumberContext);
}

export const ShowSlideNumberProvider = ({ children }) => {
    const [showSlideNumber, setShowSlideNumber] = useState(true);

    const toggleShowSlideNumber = () => setShowSlideNumber(!showSlideNumber);

    return (
        <ShowSlideNumberContext.Provider value={{ showSlideNumber, toggleShowSlideNumber }}>
            {children}
        </ShowSlideNumberContext.Provider>
    );
};