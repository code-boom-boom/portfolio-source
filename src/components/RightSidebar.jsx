import React, { useContext } from "react";
import { Award, Bank, Book, Briefcase, Home3, Like1, Star } from "iconsax-react";
import { Sun, X, Moon } from "react-feather";
import { UIContext } from "../App";

export default function RightSidebar() {

    const { uiState, uiDispatch } = useContext(UIContext);

    let menuItems = [
        {
            name: "Home",
            id: "home",
            icon: <Home3 variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Service",
            id: "service",
            icon: <Award variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Work History",
            id: "work",
            icon: <Briefcase variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Education History",
            id: "education",
            icon: <Bank variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Projects",
            id: "project",
            icon: <Like1 variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Testimonials",
            id: "testimonial",
            icon: <Star variant="Bold" color="#ffffff" size={24} />
        },
        {
            name: "Contact",
            id: "contact",
            icon: <Book variant="Bold" color="#ffffff" size={24} />
        },
    ];

    const scrollToElement = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className="w-full h-full p-8 flex flex-col right-sidebar-wrapper gap-4 bg-white dark:bg-dark-bg-primary">
            { uiState.collapsedMenu ? (
                <div className="flex justify-center" onClick={ () => uiDispatch({ type: "CLOSE_RIGHT_MENU" }) }>
                    <X size={24} className="cursor-pointer"  color={ uiState.darkMode ? "#ffffff" : "#292D32" } />
                </div>
            ) : (
                <div className="flex justify-center" data-place="left" data-tip={ uiState.darkMode ? "Light Mode" : "Dark Mode" } onClick={ () => uiDispatch({ type: "TOGGLE_THEME" })}>
                    { uiState.darkMode ? <Sun size={24} className="text-primary cursor-pointer" /> : <Moon size={24} className="text-primary cursor-pointer" />}
                </div>
            ) }
            <div className="h-full flex flex-col justify-center items-center gap-8">
                { menuItems.map((item, key) => (
                    <div key={key} className="flex justify-center" data-place="left" data-tip={item.name}>
                        <div onClick={ () => scrollToElement(item.id) } className="rounded-full p-2 bg-primary cursor-pointer">
                            { item.icon }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}