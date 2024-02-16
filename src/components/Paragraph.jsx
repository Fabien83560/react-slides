import classNames from "classnames";
import { textStyle, textPositionStyle } from "../css/style";

export default function Paragraph({ text, position = "left", size = 2 }) {
    let containerStyle = classNames(`${textStyle[size]} ${textPositionStyle[position]}`);
    return (
        <p className={containerStyle}>{text}</p>
    );
}
