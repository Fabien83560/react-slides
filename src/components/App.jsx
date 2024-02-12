import React, { useState } from 'react';
import { FullScreenProvider } from '../context/FullScreenContext.jsx';
import Deck from "./Deck.jsx";
import ToolBar from "./ToolBar.jsx";

export default function App() {

    return (
        <>
            <FullScreenProvider>
                <Deck />
                <ToolBar />
            </FullScreenProvider>
        </>
    );
}
