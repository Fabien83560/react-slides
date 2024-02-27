import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code({ language = 'javascript', theme = "vscDarkPlus", code }) {
    const themeStyle = styles[theme] || styles.vscDarkPlus;

    return (
        <SyntaxHighlighter language={language} style={themeStyle}>
            {code}
        </SyntaxHighlighter>
    );
}
