import classNames from "classnames";

import {imageStyle, itemPositionStyle} from '../css/style.js'

export default function Image({ filePath, imgName = "", position = "center" , size = 32 }) {
    let containerStyle = classNames(`flex flex-col ${imageStyle[size]} ${itemPositionStyle[position]}`);
    return (
        <img src={filePath} alt={imgName} className={containerStyle} />
    );
}
