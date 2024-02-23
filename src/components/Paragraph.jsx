import classNames from "classnames";
import { textStyle, textPositionStyle, textColorStyle, backgroundColorStyle } from "../css/style";

export default function Paragraph({ text, position = "left", size = 2, textColor, backgroundColor }) {
    let containerStyle = classNames(`${textStyle[size]} ${textPositionStyle[position]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <p className={containerStyle}>{text}</p>
    );
}
