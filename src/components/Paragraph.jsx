import classNames from "classnames";
import { horizontalAlign,verticalAlign,textSize,textColorStyle,backgroundColorStyle } from "../css/style";

export default function Paragraph({ text, horizontal, vertical, size = 2, textColor, backgroundColor }) {
    let containerStyle = classNames(`fixed text-center ${horizontalAlign[horizontal]} ${verticalAlign[vertical]} ${textSize[size]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <p className={containerStyle}>{text}</p>
    );
}
