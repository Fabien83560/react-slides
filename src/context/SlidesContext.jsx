import React, { createContext, useContext } from 'react';

const SlidesContext = createContext();

export const useSlides = () => useContext(SlidesContext);

export const SlidesProvider = ({ children, slides }) => {
    return (
        <SlidesContext.Provider value={{ slides }}>
            {children}
        </SlidesContext.Provider>
    );
};
