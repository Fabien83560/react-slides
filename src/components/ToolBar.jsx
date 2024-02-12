import Button from "./Button";

export default function ToolBar({ toggleFullScreen }) {
    return (
        <nav className="fixed inset-x-0 bottom-0 bg-gray-700 py-3">
            <div className="flex justify-between items-center w-full px-10">
                <Button text="Full Screen" onClick={toggleFullScreen} transparent={true} />
                <div className="flex gap-2">
                    <Button text="<<" transparent={true} />
                    <Button text="<" transparent={true} />
                    <Button text="1/10" transparent={true} />
                    <Button text=">" transparent={true} />
                    <Button text=">>" transparent={true} />
                </div>

                <Button text="Settings" transparent={true} />
            </div>
        </nav>
    );
}