import React from "react";
import rolzo from "../../assets/img/projects/rolzo.png";
import yklm from "../../assets/img/projects/yklm.png";
import apical from "../../assets/img/projects/apical.png";
import ceces from "../../assets/img/projects/ceces.png";
import havvi from "../../assets/img/projects/havvi.png";
import penarosa from "../../assets/img/projects/penarosa.png";
import Project from "../Project";

const projects = [
    {
        image: rolzo,
        name: "Rolzo",
        type: "Car Rental Service | Web | Mobile",
        link: "https://rolzo.com",
        description: "ROLZO is a luxury mobility service that offers on-demand access to chauffeur services and car rentals in more than 60 countries, 300 cities, and 500 airports. ROLZO’s industry-leading platform helps its customers save time by managing bookings all-in-one place, increase operational efficiencies, and even create new lines of revenue. The platform was built in 2016 and with several updates in its website and mobile applications, it has become a popular successful online platform to manage all the car rental businesses.",
        scopes: [
            "Build an online booking website",
            "Integrate payment gateway",
            "Build an admin portal to manage the business",
            "Build a REST API",
            "Build android and iOS mobile apps",
            "Optimize web pages for SEO performance",
            "Improve the server performance"
        ],
        technologies: [
            "Laravel",
            "AngularJS",
            "Bootstrap",
            "Android Native",
            "Swift",
            "PayPal API",
            "Stripe API",
            "TinyMCE",
            "Laravel Pusher",
            "Guzzle",
            "Nginx",
            "cPanel",
            "Socialite",
            "Laravel Meta Manager",
            "SEOTools"
        ],
        period: "It took 8 months to launch the first version. The website used Laravel and Blade templates for the first launch. It took another 4 months to relaunch the website based on AngularJS. The final version was launched 2 years later after several updates and maintenance."
    },
    {
        image: yklm,
        name: "YKLM Auctions",
        type: "Online Auction Platform | Web | Mobile",
        link: "https://yklmauctions.com/",
        description: "YKLM is an auction company located in Canada British Columbia. The company organizes the auctions for artworks, automobiles, and realty. The project was to build a website and mobile apps for the business.",
        scopes: [
            "Building an admin panel using WordPress",
            "Building APIs for the website and mobile apps",
            "Integrating API in the WordPress admin portal",
            "Building Android and iOS mobile apps",
            "Creating a live streaming auction channel in the mobile app",
        ],
        technologies: [
            "Flutter",
            "WordPress",
            "Node.js",
            "Express.js",
            "Socket.io",
            "RTMP Live Stream Video",
            "PayPal API",
            "Stripe API",
            "WeChatPay API",
            "AliPay API",
        ],
        period: "It took 4 months to build both WordPress Service Platform and User Portal. And another 8 months for the mobile app development."
    },
    {
        image: penarosa,
        name: "Penarosa",
        type: "E-Commerce | Web",
        link: "https://penarosawatches.com/",
        description: "Designed in Bolzano, Italy, artfully crafted, and polished by hand, Penarosa wants nothing less than making wristwatches for the most fashionable wrists. The project was to build the online eCommerce platform with a fancy 3D simulator.",
        scopes: [
            "Building an eCommerce website for the company",
            "Design and implement a 3D virtual watch simulator",
            "Integrate payment gateway",
            "Add multi-language feature",
        ],
        technologies: [
            "Custom PHP Framework",
            "GASP",
            "WebGL",
            "ThreeJS",
            "Stripe API",
            "jQuery-pJax",
            "Facebook Pixel",
            "Google Analytics",
            "Google Tag Manager",
        ],
        period: "It took 5 months to launch the first version of the website. And there were updated features to the simulator and the final version launched after 2 months."
    },
    {
        image: havvi,
        name: "Havvi",
        type: "Fitness SaaS | Web | Mobile",
        link: "https://www.havvi.app/",
        description: "",
        scopes: [
            "Havvi is a fitness SaaS platform to connect fitness creators with customers. The app provides creators with more flexible options and users with better solution to find the right course for themselves.",
        ],
        technologies: [
            "Laravel",
            "React Native",
            "WebRTC",
            "Nutritionix API",
            "GoodRX API",
            "PayPal API",
            "Stripe API",
            "Google Analytics",
        ],
        period: "It took 6 months to launch the first version in 2015. There have been several updates and maintenance since then. The biggest update was in 2019, when original website with Laravel 5.3 was updated with Laravel 6.0."
    },
    {
        image: ceces,
        name: "Cece's Crazy Creams",
        type: "E-Commerce | Web",
        link: "https://cecescrazydreams.com/",
        description: "CeCe’s Crazy Creams are a blend of Essential oils, Hemp Oil, Hemp seed oil, CBD and other natural ingredients that have been used since 3000-2500 B.C. CBD has been found to help reduce pain without causing any known side effects, including no psychoactive effects. The project was to build an eCommerce website and admin panel to manage all business on one platform.",
        scopes: [
            "UX / UI design",
            "Logo design",
            "Product photo edit",
            "Building an eCommerce website",
            "Build an admin portal",
            "Integrate PayPal payment gateway",
        ],
        technologies: [
            "Figma",
            "Adobe Photoshop",
            "Laravel",
            "Bootstrap",
            "PayPal APIs",
            "Laravel SEOTools",
            "Nginx",
            "cPanel",
        ],
        period: "It took 2 months to launch the first site from scratch."
    },
    {
        image: apical,
        name: "Apical Cloud",
        type: "Tour SaaS Platform | Web",
        link: "https://apical.cloud/",
        description: "APICAL is the digital space dedicated to operators and companies in tourism, events, and culture who want to grow and are not afraid of change. The project goal was to build the frontend of the APICAL cloud platform, which is multi-scale tour business website.",
        scopes: [
            "Develop a user portal frontend",
            "Develop a customer booking engine frontend",
            "Multi-language site",
            "Adding concepts and ideas to the UX / UI design",
            "Improve the user experience on both platforms",
            "Integrate the Stripe API on the client-side",
            "Mobile-first responsive design",
            "Make an platform service library",
        ],
        technologies: [
            "VueJS",
            "NuxtJS",
            "TailwindCSS",
            "Amazon Amplifier",
            "Amazon Cognito",
            "Stripe API",
            "Web Component",
            "Invision",
            "Trello",
            "Twillio API",
            "MongoDB",
        ],
        period: "It took 3 months to develop a user portal. And then another 4 months to develop a booking engine. There have been several updates in the API and backend for the optimization and improvement, and it got launched 8 months later after the project started."
    },
];

export default function ProjectSection() {
    return (
        <div id="project" className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center dark:text-white">Projects</h2>
                <p className="text-center text-gray-700 lg:max-w-xl dark:text-gray-300">I have built several products on my own and been engaged in large projects. Here are some of them.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                { projects.map((project, key) => <Project project={project} key={key} />) }
            </div>
        </div>
    );
}