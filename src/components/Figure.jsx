import classNames from "classnames";
import Image from './Image.jsx'
import { horizontalAlign,verticalAlign,imageSize,backgroundColorStyle } from "../css/style.js";

export default function Figure({ filePath, imgName = "", text, horizontal, vertical, size = 32, textBackgroundColor, imgBackgroundColor}) {
    let containerStyle = classNames(`fixed ${horizontalAlign[horizontal]} ${verticalAlign[vertical]} ${imageSize[size]} ${backgroundColorStyle[textBackgroundColor]}`);
    return (
        <div className={containerStyle}>
            <Image filePath={filePath} imgName={imgName} size={size} vertical={20} backgroundColor={imgBackgroundColor}/>
            <p>{text}</p>
        </div>
    );
}
