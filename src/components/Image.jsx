export default function Image({ filePath , imgName = "" , text }) {
    return (
        <>
            <div>
                <img src={filePath} alt={imgName} />
                <p>{text}</p>
            </div>
        </>
    );
}
