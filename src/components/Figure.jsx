import classNames from "classnames";
import Image from './Image.jsx'
import { itemPositionStyle , textStyle } from "../css/style.js";

export default function Figure({ filePath, imgName = "", text, position, textSize = 2, imgSize }) {
    let containerStyle = classNames(`flex flex-col w-full ${itemPositionStyle[position]} ${textStyle[textSize]}`);
    return (
        <div className={containerStyle}>
            <Image filePath={filePath} imgName={imgName} size={imgSize}/>
            <p>{text}</p>
        </div>
    );
}
