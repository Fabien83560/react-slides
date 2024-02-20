import classNames from "classnames";
import { textStyle , textPositionStyle, textColorStyle, backgroundColorStyle } from "../css/style";

export default function Title({ text, position = "center" , size = 5 , textColor , backgroundColor }) {
    
    let containerStyle = classNames(`${textStyle[size]} ${textPositionStyle[position]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <h1 className={containerStyle}>{text}</h1>
    );
}
