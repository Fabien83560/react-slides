export default function BulletedList({ tabElement }) {

    return (
        <ul className="list-disc">
            {tabElement.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
}
