import { Send } from "iconsax-react";
import React, { useRef, useState } from "react";
import Button from "./Button";
import { NotificationManager } from "react-notifications";
import emailjs from "emailjs-com";
import { validateEmail } from "../helpers";

export default function ContactForm() {

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSendEmail = () => {

        if (sending) {
            NotificationManager.warning("Process is running!");
            return ;
        }

        if (!name) {
            NotificationManager.error("Name field is required!");
            return ;
        }

        if (!email) {
            NotificationManager.error("Email field is required!");
            return ;
        }

        if (!validateEmail(email)) {
            NotificationManager.error("Email is not valid!");
        }

        setSending(true);

        emailjs.sendForm("service_ogvrn4j", "template_qi85kxr", form.current, "user_Fppq7eXwdlTWd4993DWIK").then(() => {
            NotificationManager.success("Email has been sent! I will reply you back within 1 business day.");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setSending(false);
        }, (err) => {
            console.log(err);
            NotificationManager.error("Unexpected error occurred. Please try again later or I will get in touch with you!");
            setSending(false);
        });
    }

    return (
        <div className="bg-white rounded-xl p-4 dark:bg-dark-bg-primary">
            <form className="flex flex-col gap-4" ref={form}>
                <div className="flex flex-col gap-1">
                    <h6 className="text-sm dark:text-white">Your Full Name (Required)</h6>
                    <input type="text" name="name" disabled={sending} placeholder="Please type your full name" onChange={(e) => setName(e.target.value)} value={name} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-sm dark:text-white">Your Email (Required)</h6>
                    <input type="email" name="email" disabled={sending} placeholder="Please type your email" onChange={(e) => setEmail(e.target.value)} value={email} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-sm dark:text-white">Subject</h6>
                    <input type="text" name="subject" disabled={sending} placeholder="Subject of your message" onChange={(e) => setSubject(e.target.value)} value={subject} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-sm dark:text-white">Your Message</h6>
                    <textarea type="text" name="message" disabled={sending} rows={5} placeholder="Subject of your message" onChange={(e) => setMessage(e.target.value)} value={message} className="block px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:bg-gray-50 disabled:text-gray-100 disabled:border-gray-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
                </div>
                <div className="flex" onClick={ handleSendEmail }>
                    <Button type={sending ? "disabled" : "primary"} text={ sending ? "SENGING EMAIL..." : "SEND MESSAGE" } icon={<Send color="#FFFFFF" size={18} />} />
                </div>
            </form>
        </div>
    );
}