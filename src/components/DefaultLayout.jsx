/**
 * Default Layout
 */
import React, { useContext } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import ProjectDetail from "./ProjectDetail";
import { UIContext } from "../App";
import MobileHeader from "./MobileHeader";

export default function DefaultLayout({ children }) {

    const { uiState } = useContext(UIContext);

    return (
        <div className="app-layout">
            <div className={`left-sidebar-container ${ uiState.collapsedMenu && uiState.openLeftMenu && "open" }`}>
                <LeftSidebar />
            </div>
            <SimpleBar className="page-container bg-ligth-bg-secondary dark:bg-dark-bg-secondary">
                { children }
            </SimpleBar>
            <div className={`right-sidebar-container ${ uiState.collapsedMenu && uiState.openRightMenu && "open" }`}>
                <RightSidebar />
            </div>
            <div className="mobile-header-container">
                <MobileHeader />
            </div>
            { uiState.openProjectModal && <ProjectDetail /> }
        </div>
    );
}