import React from "react";
import bannerImg from "../../assets/img/banner.png";
import Button from "../Button";
import { DirectRight } from "iconsax-react";

export default function Banner() {
    return (
        <div id="home" className="px-6 pt-6 rounded-xl bg-white grid grid-cols-5 duration-500 dark:bg-dark-bg-primary">
            <div className="col-span-5 lg:col-span-3 p-6 flex flex-col justify-center gap-4">
                <h1 className="text-4xl font-extrabold dark:text-white">I'm Kevin Lin<br/><span className="text-primary">Full-stack</span> Developer</h1>
                <p className="text-gray-700 dark:text-gray-300">Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. This quality and results-based approach drove me to collaborate with several companies to create different type of websites and software products. Eager to obtain a challenging position at a prestigious company that will expand my learning and build upon my developer skills.</p>
                <div className="flex" onClick={ () => document.getElementById("contact").scrollIntoView({ behavior: "smooth" }) }>
                    <Button text="HIRE ME" size="lg" icon={<DirectRight color="#FFFFFF"/>} />
                </div>
            </div>
            <div className="col-span-5 lg:col-span-2 px-6 flex items-end">
                <img className="w-full" src={ bannerImg } alt="banner" />
            </div>
        </div>
    );
}