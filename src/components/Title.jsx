export default function Title({ text , position="left" }) {

    if(position != "left" || position != "center" || position != "right") {
        position = "left";
    }

    let combinedStyle = `text-7xl text-${position}`
    return (
        <>
            <h1 className={combinedStyle}>{text}</h1>
        </>
    );
}
