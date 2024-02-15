export default function List({ tabElement , type }) {
    let listStyle = (type == "bulleted" ? "list-disc" : (type == "decimal" ? "list-decimal" : ""));

    return (
        <ul className={listStyle}>
            {tabElement.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
