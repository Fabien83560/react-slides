import React from 'react';
import classNames from "classnames";
import { horizontalAlign, verticalAlign, listStyle, textColorStyle, backgroundColorStyle } from "../css/style";

export default function List({ horizontal , vertical , tabElement , type , textColor , backgroundColor }) {
    let containerStyle = classNames(`fixed list-inside ${horizontalAlign[horizontal]} ${verticalAlign[vertical]} ${listStyle[type]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);

    return (
        <ul className={containerStyle}>
            {tabElement.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
