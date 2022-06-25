import React from "react";
import Banner from "../components/home/Banner";
import ServiceSection from "../components/home/ServiceSection";
import WorkHistorySection from "../components/home/WorkHistorySection";
import EducationHistorySection from "../components/home/EducationHistorySection";
import ProjectSection from "../components/home/ProjectSection";
import TestimonialSection from "../components/home/TestimonialSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="p-6 flex flex-col gap-36 relative">
            <Banner />
            <ServiceSection />
            <WorkHistorySection />
            <EducationHistorySection />
            <ProjectSection />
            <TestimonialSection />
            <ContactSection />
            <Footer />
        </div>
    );
}