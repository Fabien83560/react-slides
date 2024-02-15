export default function Image({ filePath, imgName = "", position }) {
    let containerStyle = `flex flex-col ${position === "left" ? "items-start" : position === "center" ? "items-center" : "items-end"} `;
    return (
        <img src={filePath} alt={imgName} className={containerStyle} />
    );
}
