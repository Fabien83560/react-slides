import Button from "./Button";

export default function ToolBar({ toggleFullScreen , isFullScreen }) {
    let addStyle = "";
    let butttonTextColor = "text-white";
    if(! isFullScreen) {
        addStyle = "bg-gray-700 py-3";
    }
    else {
        addStyle = "mb-3";
        butttonTextColor = "text-black";
    }

    const combinedStyle = `fixed inset-x-0 bottom-0 ${addStyle}`;
    return (
        <nav className={combinedStyle} >
            <div className="flex justify-between items-center w-full px-10">
                <Button text="Full Screen" onClick={toggleFullScreen} transparent={true} textColor={butttonTextColor} />
                <div className="flex gap-2">
                    <Button text="<<" transparent={true} textColor={butttonTextColor} />
                    <Button text="<" transparent={true} textColor={butttonTextColor} />
                    <Button text="1/10" transparent={true} textColor={butttonTextColor} />
                    <Button text=">" transparent={true} textColor={butttonTextColor} />
                    <Button text=">>" transparent={true} textColor={butttonTextColor} />
                </div>

                <Button text="Settings" transparent={true} textColor={butttonTextColor} />
            </div>
        </nav>
    );
}