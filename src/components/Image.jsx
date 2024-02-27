import classNames from "classnames";

import {imageStyle, itemPositionStyle, backgroundColorStyle} from '../css/style.js'

export default function Image({ filePath, imgName = "", align = "center" , size = 32, backgroundColor }) {
    let containerStyle = classNames(`flex flex-col ${imageStyle[size]} ${itemPositionStyle[align]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <img src={filePath} alt={imgName} className={containerStyle} />
    );
}
