import React from "react";
import { Download } from "react-feather";

export default function DownloadCV() {
    return (
        <div className="absolute left-0 bottom-0 w-full flex flex-col pt-4 border-t border-x-gray-300">
            <a href="/portfolio/kevin.pdf" target="_blank" download className="py-2 px-4 bg-primary text-white text-center cursor-pointer flex justify-center gap-4">
                DOWNLOAD CV
                <Download size={20} />
            </a>
        </div>
    );
}