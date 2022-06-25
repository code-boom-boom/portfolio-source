import React from "react";
import upworkLogo from "../../assets/img/upwork.png";
import yklmLogo from "../../assets/img/yklm.png";
import rolzoLogo from "../../assets/img/rolzo.png";
import toptalLogo from "../../assets/img/toptal.png";
import ariensLogo from "../../assets/img/ariens.png";
import Work from "../Work";

const works = [
    {
        logo: upworkLogo,
        companyName: "Upwork",
        role: "Senior full-stack developer",
        period: "2018-present",
        roles: [
            "Worked on a frontend development of an NFT marketplace, using React, NextJS and GraphQL",
            "Built a UI component library and storybook using ReactJS",
            "Worked as a frontend-focused full-stack developer on a Defi system development, leading the frontend team and helping the project manager with tokenomics and governance token business logic",
            "Developed a JavaScript library for conversion between S2 geometry system and geographic coordinate system as a solution to a VR/AR gamified tour service",
            "Worked as a lead developer for a RV rental SaaS platform, having structured the whole system and database and contributing to the REST API development",
            "Worked as a frontend developer for a tour cloud system development",
            "Worked as a full-stack developer for a marketing service company, developing 2 marketing services and implementing subscription management system",
            "Achieved 94% of JSS (Job success score) and top plus developer badge",
        ]
    },
    {
        logo: yklmLogo,
        companyName: "YKLM Auctions",
        role: "Senior Lead Developer",
        period: "2019-2021",
        roles: [
            "Directly worked with CTO or project manager to discuss the project roadmap and timeline",
            "Developed an online auction platform using Laravel and VueJS",
            "Integrated Mozilla Hubs into the gallery view of the mobile app",
            "Oversaw a team of 4 to write scalable code and clear documentation",
            "Managed unit testing and UI testing for new features, bugs and operating speed",
            "Handled all the DevOps and cloud services to launch and run MVP for couple of months",
            "Managed all bug reports and customer feedbacks, and completed first round of system upgrade"
        ]
    },
    {
        logo: toptalLogo,
        companyName: "Toptal",
        role: "Senior full-stack developer",
        period: "2018-2019",
        roles: [
            "Contributed to the in-house UI library to create reusable components in ReactJS",
            "Created a MVP version of a logo maker online service using Laravel, VueJS and MongoDB",
            "Implemented an online payment system and a subscription and membership management system for a media company to improve the customer conversion rate",
            "Worked within an agile scrum team, contributing to 100% CICD and frontend development"
        ]
    },
    {
        logo: ariensLogo,
        companyName: "AriensCo",
        role: "Mid-senior full-stack developer",
        period: "2015-2017",
        roles: [
            "Upgraded the company legacy system",
            "Worked on the company internal employee management system",
            "Set up the company payroll management portal",
            "Developed, tested, debugged and documented the company task management and chat system",
            "Developed dynamic and customizable company notification email system",
            "Worked with PM, QA and customer support to figure out bugs and customer feedbacks from production environment"
        ]
    },
    {
        logo: rolzoLogo,
        companyName: "ROLZO",
        role: "Junior frontend developer",
        period: "2013-2015",
        roles: [
            "Assigned to e-commerce team, and participated in designing improved software and customer platform using algorithms to match users to product",
            "Presented software development and lifecycle reports to CTO and CEO with 2 other senior developers, receiving recognition for ideas and implementation",
            "Migrated the frontend application from ordinary blade template to ReactJS",
            "Developed mobile first responsive frontend app for customer and seller portal, closely working with the designer"
        ]
    }
];

export default function WorkHistorySection() {
    return (
        <div id="work" className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center dark:text-white">Work History</h2>
                <p className="text-center text-gray-700 lg:max-w-xl dark:text-gray-300">I have worked in several different companies in different industries. Here are some of them.</p>
            </div>
            <div className="flex flex-col p-8 rounded-xl bg-white dark:bg-dark-bg-primary">
                { works.map((work, key) => <Work key={key} work={work} borderLine={key !== works.length - 1} />) }
            </div>
        </div>
    );
}