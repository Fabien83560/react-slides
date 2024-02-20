import classNames from "classnames";
import { listStyle, textColorStyle, backgroundColorStyle } from "../css/style";

export default function List({ tabElement , type , textColor , backgroundColor }) {
    let containerStyle = classNames(`${listStyle[type]} ${textColorStyle[textColor]} ${backgroundColorStyle[backgroundColor]}`);

    return (
        <ul className={containerStyle}>
            {tabElement.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
