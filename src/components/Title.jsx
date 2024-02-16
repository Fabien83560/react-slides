import classNames from "classnames";
import { textStyle , textPositionStyle } from "../css/style";

export default function Title({ text, position = "center" , size = 5 }) {
    
    let containerStyle = classNames(`${textStyle[size]} ${textPositionStyle[position]}`);
    return (
        <h1 className={containerStyle}>{text}</h1>
    );
}
