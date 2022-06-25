import React from "react";

import Slider from "react-slick";

import avatar1 from "../../assets/img/reviews/1.jpg";
import avatar2 from "../../assets/img/reviews/2.jpg";
import avatar3 from "../../assets/img/reviews/3.jpg";
import avatar4 from "../../assets/img/reviews/4.jpg";
import avatar5 from "../../assets/img/reviews/5.jpg";

import Star from "../Star";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        name: "Arielle-cherie Paterson",
        job: "CEO, Simplitest, USA",
        avatar: avatar1,
        message: "Kevin is a phenomenal, rockstar, A1 developer. I have never worked with someone so skilled in all aspects of system design and implementation. A lot of people say they are full-stack developers, but their skillset is often weak in the front-end, the back-end, the system design, or some combination of these. Kevin is a SUPERSTAR in everything - and more! He has been an absolute joy to work with. Whenever there was an issue that needed to be solved, he never hit a brick wall. He always found a way to solve it quickly and for the best outcome of the whole product itself. Kevin is truly one of the best developers I have ever worked with! I have worked with many. I can't thank him enough for his expertise in implementing this MVP. He works so well in short deadlines and knows how to take the 'idea' of something and bring it fully to life. I am beyond grateful we met!",
    },
    {
        name: "Gerardo Costes",
        job: "Sr. Program Manager, D&K Engineering, USA",
        avatar: avatar2,
        message: "As always, it has been a pleasure working with Kevin. He continues to exceed my expectations delivering high quality work in less than expected time. Definitely will work with him again.",
    },
    {
        name: "Kevin Matuszek",
        job: "Project Manager, Toozix, USA",
        avatar: avatar3,
        message: "Kevin was extremely professional and patient. Really helped me with a difficult Python problem and delivered on a tight deadline. I enjoyed working with him and would recommend without hesitation.",
    },
    {
        name: "Larry Jones",
        job: "CEO, Telacare, USA",
        avatar: avatar4,
        message: "This developer is an extremely hard worker. He goes above and beyond on every task. His coding is very clean and well designed. Very efficient in cleaning up and making code shorter to create the same results. If you are looking for someone who will exceed every expectation you have then hire Kevin. Just remember you will have to share him with me cause I am hiring him again now.",
    },
    {
        name: "Nicola Zanola",
        job: "CEO, Apical, Italy",
        avatar: avatar5,
        message: "Kevin was excellent to work with through the entire project. He was very communicative and worked all through the night. Kevin had to learn our code and adapt to it to complete the project. He has far exceeded my expectations, and I would highly recommend him for any project you may have.",
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function TestimonialSection() {
    return (
        <div id="testimonial" className="flex flex-col gap-8">
            <div className="flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-center dark:text-white">Testimonials</h2>
                <p className="text-center text-gray-700 lg:max-w-xl dark:text-gray-300">Here are some of recommendations from my previous clients.</p>
            </div>
            <div className="p-8 rounded-xl bg-white dark:bg-dark-bg-primary">
                <Slider { ...settings }>
                    { reviews.map((review, key) => (
                        <div key={key} className="flex flex-col">
                            <div className="flex justify-between gap-4">
                                <div className="flex gap-4 items-center">
                                    <img src={review.avatar} alt={review.name} className="w-16 rounded-full shadow-lg"/>
                                    <div className="flex flex-col">
                                        <p className="text-primary font-bold">{ review.name }</p>
                                        <p className="dark:text-white">{ review.job }</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">"{ review.message }"</p>
                        </div>
                    )) }
                </Slider>
            </div>
        </div>
    );
}