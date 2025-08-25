"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        logo: "/images/Verizon.jpg",
        text: "When we sold one of our data center facilities, we only had four months to complete the migration. Align's expertise and efficiency made this seemingly impossible timeline achievable.",
        name: "Verizon",
        role: "Data Center Migration",
    },
    {
        id: 2,
        logo: "/images/Dean-Ulloa.png",
        text: "After 15 years of working with Align, they have proven to be more than just a technology partner. Their commitment to understanding our business needs sets them apart.",
        name: "Dean Ulloa",
        role: "Principal of Technology, Ted Moudis Associates",
    },
    {
        id: 3,
        logo: "/images/Karl Cole-Frieman.png",
        text: "At Cole-Frieman & Mallon LLP, we are proud of our reputation for excellence. Align has been instrumental in maintaining that standard through our IT solutions.",
        name: "Karl Cole-Frieman",
        role: "Co-Managing Partner, Cole-Frieman & Mallon",
    },
    {
        id: 4,
        logo: "/images/Dwayne-Wilson.jfif",
        text: "Align's team demonstrated exceptional technical skills and project management capabilities during our critical infrastructure upgrade.",
        name: "Dwayne Wilson",
        role: "Infrastructure Upgrade",
    },
    {
        id: 5,
        logo: "/images/Vincent-Calcagno.png",
        text: "The level of service and attention to detail we receive from Align is unmatched in the industry. They truly understand our technology challenges.",
        name: "Vincent Calcagno",
        role: "Technology Strategy",
    },
    {
        id: 6,
        logo: "/images/Kelly-Gargiulio.png",
        text: "Working with Align has transformed our IT operations. Our solutions are not just technically sound but strategically aligned with our business goals.",
        name: "Kelly Gargiulio",
        role: "IT Operations",
    }
];

export default function TestimonialCarousel() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const { elementRef, isVisible } = useScrollAnimation({
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    return (
        <>
            <style jsx>{`
                 .swiper-slide {
                     padding: 0 !important;
                 }
             `}</style>
            <div ref={elementRef} className={`w-full py-10 bg-white transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <h2 className="text-5xl font-bold text-center text-[#008AD4] mb-12">
                    Client Testimonials
                </h2>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="w-full">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={3}
                            loop={true}
                            grabCursor={true}
                            style={{
                                '--swiper-navigation-size': '0px',
                            } as React.CSSProperties}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={false}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full rounded-xl p-[2px] bg-gradient-to-tr from-[#008AD4] via-[#008AD4] to-[#00D1FF]">
                                        {/* Inner white card */}
                                        <div className="bg-white rounded-xl p-6 h-[500px]">
                                            <div className="flex flex-col items-start text-left h-full">
                                                {/* Profile image */}
                                                <div className="w-20 h-20 rounded-full mb-6 bg-gray-200 flex items-center justify-center overflow-hidden mt-6">
                                                    <Image
                                                        src={t.logo}
                                                        alt={t.name}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                {/* Testimonial text */}
                                                <p className="text-gray-700 mb-6 text-lg leading-relaxed font-semibold">
                                                    &ldquo;{t.text}&rdquo;
                                                </p>
                                                {/* Name + role */}
                                                <h4 className="font-bold text-gray-900">{t.name}</h4>
                                                <span className="text-sm text-gray-500">
                                                    {t.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>



                        {/* View All Testimonials Button */}
                        <div className="flex justify-center mt-8 px-4 md:px-0">
                            <div className="relative rounded-lg p-[2px] bg-gradient-to-tr from-[#008AD4] via-[#008AD4] to-[#00D1FF] w-full md:w-auto">
                                <button className="bg-white rounded-lg px-6 py-2 text-black font-bold text-lg cursor-pointer w-full md:w-auto">
                                    View All Testimonials
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
