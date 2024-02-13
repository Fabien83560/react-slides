export default function Image({ filePath, imgName = "", text, position }) {
    let containerStyle = `flex flex-col ${position === "left" ? "items-start" : position === "center" ? "items-center" : "items-end"} w-full`;
    let textStyle = `text-sm`;

    return (
        <div className={containerStyle}>
            <img src={filePath} alt={imgName} className="max-w-full" />
            <p className={textStyle}>{text}</p>
        </div>
    );
}
