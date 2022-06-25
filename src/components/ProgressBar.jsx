import React from "react";

export default function ProgressBar({ label, value, display }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
                <p className="dark:text-white">{ label }</p>
                <p className="dark:text-white">{ display }</p>
            </div>
            <div className="border-primary border rounded-md flex" style={{ padding: "2px" }}>
                <span className="bg-primary h-2 rounded-md" style={{ width: `${value * 100}%`, height: "4px" }}></span>
            </div>
        </div>
    );
}