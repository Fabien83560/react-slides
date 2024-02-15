import Image from './Image.jsx'

export default function Figure({ filePath, imgName = "", text, position }) {
    let containerStyle = `flex flex-col ${position === "left" ? "items-start" : position === "center" ? "items-center" : "items-end"} w-full`;
    let textStyle = `text-sm`;

    return (
        <div className={containerStyle}>
            <Image filePath={filePath} imgName={imgName} />
            <p className={textStyle}>{text}</p>
        </div>
    );
}
