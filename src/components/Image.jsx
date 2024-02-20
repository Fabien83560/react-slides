import classNames from "classnames";

import {imageStyle, itemPositionStyle, backgroundColorStyle} from '../css/style.js'

export default function Image({ filePath, imgName = "", position = "center" , size = 32, backgroundColor }) {
    let containerStyle = classNames(`flex flex-col ${imageStyle[size]} ${itemPositionStyle[position]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <img src={filePath} alt={imgName} className={containerStyle} />
    );
}
