import classNames from "classnames";
import { horizontalAlign, verticalAlign, textSize ,textColorStyle, backgroundColorStyle } from "../css/style";

export default function Title({ text, horizontal, vertical, size = 8 , textColor , backgroundColor }) {
    
    let containerStyle = classNames(`fixed text-justify ${horizontalAlign[horizontal]} ${verticalAlign[vertical]} ${textSize[size]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);
    return (
        <>
            <h1 className={containerStyle}>{text}</h1>
            <br/>
        </>
    );
}
