export default function Title({ text, position = "left" }) {
    let combinedStyle = `text-7xl ${position === "left" ? "text-left" : position === "center" ? "text-center" : "text-right"}`;
    return (
        <h1 className={combinedStyle}>{text}</h1>
    );
}
