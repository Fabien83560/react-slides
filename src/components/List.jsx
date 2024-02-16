import classNames from "classnames";
import { listStyle } from "../css/style";

export default function List({ tabElement , type }) {
    let containerStyle = classNames(`${listStyle[type]}`);

    return (
        <ul className={containerStyle}>
            {tabElement.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
