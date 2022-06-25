import React from "react";
import tdtLogo from "../../assets/img/tdt.png";
import fredoniaLogo from "../../assets/img/fredonia.png";
import Education from "../Education";

const educations = [
    {
        logo: fredoniaLogo,
        universityName: "State University of New York at Fredonia",
        role: "Bachelor's Degree | Computer Science",
        period: "2014-2018",
        description: "The Bachelor of Science (BS) in Computer Science and Information Systems program offers concentrations in Computer Science or Information Systems, as well as a preparatory Fast Track for those without a computer science background. It prepares you to enter and excel in a career as an administrator, analyst, designer, developer, or programmer leading technology teams."
    },
    {
        logo: tdtLogo,
        universityName: "Ton Duc Thang University",
        role: "Bachelor's Degree | Robotics Technology",
        period: "2009-2013",
        description: "Robotics Technology is the bachelor degree course with many interesting robotic subjects and related courses like Motion Planning, Artificial Intelligence, Machine Learning, Computer Vision and Computer Programming of Robotics."
    }
];

export default function EducationHistorySection() {
    return (
        <div id="education" className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center dark:text-white">Education History</h2>
                <p className="text-center text-gray-700 lg:max-w-xl dark:text-gray-300">I have bachelor's degree in Robotic Engineering and Master's Degree in Computer Science.</p>
            </div>
            <div className="flex flex-col p-8 rounded-xl bg-white dark:bg-dark-bg-primary">
                { educations.map((education, key) => <Education key={key} education={education} borderLine={key !== educations.length - 1} />) }
            </div>
        </div>
    );
}