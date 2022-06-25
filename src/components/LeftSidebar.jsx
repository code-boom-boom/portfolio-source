import { CloseSquare } from "iconsax-react";
import React, { useContext } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { UIContext } from "../App";
import DownloadCV from "./DownloadCV";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";

export default function LeftSidebar() {

    const { uiState, uiDispatch } = useContext(UIContext);

    return (
        <div className="w-full h-full px-8 py-4 flex flex-col bg-white duration-500 dark:bg-dark-bg-primary">
            <div className="relative w-full h-full flex flex-col">
                { uiState.collapsedMenu && <div onClick={ () => uiDispatch({ type: "CLOSE_LEFT_MENU" }) } className="absolute close-btn flex cursor-pointer"><CloseSquare color={ uiState.darkMode ? "#ffffff" : "#292D32" } /></div> }
                <GeneralInfo />
                <SimpleBar className="skill-container">
                    <Skills />
                </SimpleBar>
                <DownloadCV />
            </div>
        </div>
    );
}