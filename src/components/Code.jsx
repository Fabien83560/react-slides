import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code({ code, language = 'javascript' }) {
    return (
        <SyntaxHighlighter language={language} style={dark}>
            {code}
        </SyntaxHighlighter>
    );
}
