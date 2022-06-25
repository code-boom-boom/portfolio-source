import AppConfig from "../config/AppConfig";

export const initialUIState = {
    darkMode: localStorage.getItem("theme") === "dark" ? true : AppConfig.dark,
    project: null,
    openProjectModal: false,
    openLeftMenu: false,
    openRightMenu: false,
    collapsedMenu: window.innerWidth < 1024,
    isMobile: window.innerWidth < 780
}

export const UIReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_PROJECT_MODAL":
            return {
                ...state,
                openProjectModal: true,
                project: action.payload
            };

        case "CLOSE_PROJECT_MODAL":
            return {
                ...state,
                openProjectModal: false,
            };

        case "OPEN_LEFT_MENU":
            return {
                ...state,
                openLeftMenu: true
            };

        case "CLOSE_LEFT_MENU":
            return {
                ...state,
                openLeftMenu: false
            };

        case "OPEN_RIGHT_MENU":
            return {
                ...state,
                openRightMenu: true
            };

        case "CLOSE_RIGHT_MENU":
            return {
                ...state,
                openRightMenu: false
            };

        case "TOGGLE_THEME":
            if (state.darkMode) {
                localStorage.setItem("theme", "light");
                return {
                    ...state,
                    darkMode: false
                }
            } else {
                localStorage.setItem("theme", "dark");
                return {
                    ...state,
                    darkMode: true
                }
            }

        default:
            throw new Error(`action type ${action.type} is undefined`);
    }
}