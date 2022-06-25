import { Bitcoin, CloudConnection, Code, Mobile, MoneyRecive, Monitor } from "iconsax-react";
import React from "react";
import Service from "../Service";

const services = [
    {
        title: "Front-end Development",
        description: "React, Vue",
        icon: <Monitor size={64} color="#655af3"/>
    },
    {
        title: "Back-end Development",
        description: "Laravel, Node",
        icon: <Code size={64} color="#655af3"/>
    },
    {
        title: "SaaS Development",
        description: "Subscription, Multi-tenant",
        icon: <MoneyRecive size={64} color="#655af3"/>
    },
    {
        title: "Mobile Development",
        description: "iOS, Android",
        icon: <Mobile size={64} color="#655af3"/>
    },
    {
        title: "Blockchain",
        description: "Bitcoin, Ethereum",
        icon: <Bitcoin size={64} color="#655af3"/>
    },
    {
        title: "Cloud Service",
        description: "AWS, GCP",
        icon: <CloudConnection size={64} color="#655af3"/>
    }
];

export default function ServiceSection() {
    return (
        <div id="service" className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center dark:text-white">My Services</h2>
                <p className="text-center text-gray-700 lg:max-w-xl dark:text-gray-300">I have been in the industry for 8+ years and gained rich experience in web and mobile development. In business, we are not doing a college project, but face actual customers and I can help you launch your product with my expertise and experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { services.map((service, key) => (<Service key={key} service={service} />)) }
            </div>
        </div>
    );
}