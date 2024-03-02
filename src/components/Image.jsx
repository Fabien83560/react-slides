import React from 'react';
import classNames from "classnames";

import { horizontalAlign,verticalAlign,imageSize,backgroundColorStyle} from '../css/style.js'

export default function Image({ filePath, imgName = "", horizontal, vertical, size = 32, backgroundColor }) {
    let containerStyle = classNames(`fixed ${horizontalAlign[horizontal]} ${verticalAlign[vertical]} ${imageSize[size]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <img src={filePath} alt={imgName} className={containerStyle} />
    );
}
