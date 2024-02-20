import classNames from "classnames";
import { textColorStyle } from "../css/style.js";

export default function Table({ tabElement, textColor }) {
    let otherStyle = classNames(` ${textColorStyle[textColor]}`);
    return (
        <table className={`min-w-full divide-y divide-gray-200 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ${otherStyle}`}>
            <tbody className="bg-white divide-y divide-gray-200">
                {tabElement.map((subTable, indexTable) => (
                    <tr key={indexTable} className="hover:bg-gray-50">
                        {subTable.map((element, index) => (
                            <td key={index} className="px-6 py-4 whitespace-nowrap text-sm">
                                {element}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
