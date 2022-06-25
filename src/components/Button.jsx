import React from "react";

export default function Button({ type = "primary", text, icon, size="md", corner = "smooth" }) {
    let className = "cursor-pointer flex justify-center items-center gap-2";

    switch (type) {
        case "disabled":
            className += " bg-gray-700 text-white";
            break;
        default:
            className += " bg-primary text-white";
    }

    switch (size) {
        case "lg":
            className += " py-3 px-8";
            break;
        default:
            className += " py-2 px-6";
    }

    switch (corner) {
        default:
            className += " rounded-md";
    }

    return (
        <div className={className}>
            { text }
            { icon }
        </div>
    );
}