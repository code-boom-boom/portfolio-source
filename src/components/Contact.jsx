import React from "react";
import { Copy } from "iconsax-react";
import { NotificationManager } from "react-notifications";

export default function Contact({ contact }) {

    const copyValue = (value) => {
        navigator.clipboard.writeText(value);
        NotificationManager.info("Copied to the clipboard");
    }

    return (
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-white dark:bg-dark-bg-primary">
            <div className="flex justify-center">
                <div className="flex p-2 rounded-full bg-primary">
                    { contact.icon }
                </div>
            </div>
            { contact.items.map((item, key) => (
                <div key={key} className="flex justify-between gap-4">
                    <p className="font-bold dark:text-white">{ item.title }</p>
                    <div className="flex items-center gap-4">
                        <p className="dark:text-white">{ item.value }</p>
                        <div onClick={ () => copyValue(item.value) } className="flex cursor-pointer">
                            <Copy color="#655af3" />
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
}