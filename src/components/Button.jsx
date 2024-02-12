export default function Button({ text, onClick, transparent, additionalClasses = "" }) {
    let baseClasses = "py-2 px-4 rounded ";
    let styleClasses;
    if (transparent) {
        styleClasses = `text-white bg-transparent hover:bg-blue-500 hover:text-white border border-blue-500 hover:border-transparent ${additionalClasses}`;
    } else {
        styleClasses = `bg-blue-500 text-white hover:bg-blue-700 ${additionalClasses}`;
    }

    const combinedClasses = `${baseClasses} ${styleClasses}`;

    return (
        <button className={combinedClasses} onClick={onClick}>
            {text}
        </button>
    );
}
