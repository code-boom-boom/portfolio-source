import { Bootstrap, Archive, MoneySend, Apple, Android, ArchiveBook } from "iconsax-react";
import React from "react";
import { Figma, GitHub, Slack } from "react-feather";
import ProgressBar from "./ProgressBar";

const mainInfo = [
    {
        label: "Age:",
        value: new Date().getUTCFullYear() - 1992
    },
    {
        label: "Residence:",
        value: "USA"
    },
    {
        label: "Phone:",
        value: "(469) 248-5696"
    },
    {
        label: "Address:",
        value: "Port Jervis, NY"
    }
];

const languages = [
    {
        name: "English",
        level: 100
    },
    {
        name: "Vietnamese",
        level: 60
    },
    {
        name: "Japanese",
        level: 30
    }
];

const skills = [
    {
        name: "HTML",
        level: 10
    },
    {
        name: "CSS",
        level: 10
    },
    {
        name: "JavaScript",
        level: 10
    },
    {
        name: "PHP",
        level: 10
    },
    {
        name: "Laravel",
        level: 9
    },
    {
        name: "React",
        level: 9
    },
    {
        name: "Vue",
        level: 9
    },
    {
        name: "Node",
        level: 9
    },
    {
        name: "SQL",
        level: 9
    },
    {
        name: "MongoDB",
        level: 8
    },
    {
        name: "WordPress",
        level: 6
    },
    {
        name: "AWS",
        level: 6
    },
    {
        name: "GCP",
        level: 5
    },
];

const extraSkills = [
    {
        name: "Bootstrap, TailwindCSS",
        icon: <Bootstrap size={24} color="#655af3" />
    },
    {
        name: "SASS, Materialize",
        icon: <Archive size={24} color="#655af3" />
    },
    {
        name: "Git, Github, Gitlab",
        icon: <GitHub size={24} className="text-primary" />
    },
    {
        name: "Figma, Adobe XD, Invision",
        icon: <Figma size={24} className="text-primary" />
    },
    {
        name: "Slack, Notion, JIRA, Trello",
        icon: <Slack size={24} className="text-primary" />
    },
    {
        name: "Payment Integration",
        icon: <MoneySend size={24} color="#655af3" />
    },
    {
        name: "iOS Development",
        icon: <Apple size={24} color="#655af3" />
    },
    {
        name: "Android Development",
        icon: <Android size={24} color="#655af3" />
    },
    {
        name: "And many more...",
        icon: <ArchiveBook size={24} color="#655af3" />
    },
];

export default function Skills() {
    return (
        <div className="w-full flex flex-col">
            <div className="py-4 border-b border-gray-300 flex flex-col gap-2">
                { mainInfo.map((info, key) => (
                    <div key={key} className="flex justify-between items-center">
                        <p className="bg-primary px-2 text-white">{ info.label }</p>
                        <p className="dark:text-white">{ info.value }</p>
                    </div>
                )) }
            </div>
            <div className="py-4 border-b border-gray-300 flex flex-col gap-2">
                <h6 className="font-bold mb-2 dark:text-white">Languages</h6>
                { languages.map((language, key) => <ProgressBar key={key} label={language.name} value={language.level/100} display={`${language.level}%`}/>) }
            </div>
            <div className="py-4 border-b border-gray-300 flex flex-col gap-2">
                <h6 className="font-bold mb-2 dark:text-white">Skills</h6>
                { skills.map((skill, key) => <ProgressBar key={key} label={skill.name} value={skill.level/10} display={`${skill.level}/10`}/>) }
            </div>
            <div className="py-4 flex flex-col gap-2">
                <h6 className="font-bold mb-2 dark:text-white">Extra Skills</h6>
                { extraSkills.map((skill, key) => (
                    <div key={key} className="flex items-center text-sm gap-2">
                        { skill.icon }
                        <p className="dark:text-white">{ skill.name }</p>
                    </div>
                )) }
            </div>
        </div>
    );
}