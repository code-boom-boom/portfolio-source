import React, { useContext } from "react";
import { HambergerMenu, More } from "iconsax-react";
import { Sun, Moon } from "react-feather";
import { UIContext } from "../App";

export default function MobileHeader() {

    const { uiState, uiDispatch } = useContext(UIContext);

    return (
        <div className="w-full h-full p-4 flex justify-between items-center bg-white dark:bg-dark-bg-primary">
            <div className="flex cursor-pointer" onClick={ () => uiDispatch({ type: "OPEN_LEFT_MENU" }) }>
                <HambergerMenu color={ uiState.darkMode ? "#ffffff" : "#292D32" } />
            </div>
            <div className="flex cursor-pointer" onClick={ () => uiDispatch({ type: "TOGGLE_THEME" })}>
                { uiState.darkMode ? <Sun size={24} className="text-primary cursor-pointer" /> : <Moon size={24} className="text-primary cursor-pointer" />}
            </div>
            <div className="flex cursor-pointer" onClick={ () => uiDispatch({ type: "OPEN_RIGHT_MENU" }) }>
                <More color={ uiState.darkMode ? "#ffffff" : "#292D32" } />
            </div>
        </div>
    );
}