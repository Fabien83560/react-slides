export default function Button({ text, onClick, transparent , textColor }) {
    let baseClasses = "py-2 px-4 rounded ";
    let styleClasses;
    if (transparent) {
        styleClasses = `bg-transparent hover:bg-blue-500 hover:text-white border border-blue-500 hover:border-transparent`;
    }
    else {
        styleClasses = `bg-blue-500 hover:bg-blue-700`;
    }

    const combinedClasses = `${baseClasses} ${styleClasses} ${textColor}`;

    return (
        <button className={combinedClasses} onClick={onClick}>
            {text}
        </button>
    );
}
