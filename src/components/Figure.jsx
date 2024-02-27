import classNames from "classnames";
import Image from './Image.jsx'
import { itemPositionStyle , textStyle, textColorStyle, backgroundColorStyle } from "../css/style.js";

export default function Figure({ filePath, imgName = "", text, align, textSize = 2, imgSize, textColor, backgroundColor, imgBackgroundColor }) {
    let containerStyle = classNames(`flex flex-col w-full ${itemPositionStyle[align]} ${textStyle[textSize]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <div className={containerStyle}>
            <Image filePath={filePath} imgName={imgName} size={imgSize} backgroundColor={imgBackgroundColor} />
            <p>{text}</p>
        </div>
    );
}
