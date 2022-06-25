import React from "react";
import classNames from "classnames";

export default function Education({ education, borderLine }) {
    return (
        <div className={classNames("grid grid-cols-5 gap-4 py-4", { "border-b border-gray-300" : borderLine })}>
            <div className="col-span-5 md:col-span-2">
                <div className="w-full flex gap-4 items-center">
                    <img className="w-24" src={education.logo} alt={education.universityName} />
                    <div className="flex flex-col gap-2">
                        <p className="text-bold dark:text-white">At { education.universityName }</p>
                        <p className="text-gray-700 text-sm dark:text-gray-300">{ education.period }</p>
                    </div>
                </div>
            </div>
            <div className="col-span-5 md:col-span-3 flex flex-col gap-4">
                <h6 className="text-lg font-bold dark:text-white">{ education.role }</h6>
                <p className="text-gray-700 dark:text-gray-300">{ education.description }</p>
            </div>
        </div>
    );
}