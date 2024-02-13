export default function Slide({ children}) {
    return (
        <div className="relative h-full">
            <div className="m-5">
                {children}
            </div>
        </div>
    );
}
