/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import {  useState } from "react";
import { imageUrl } from "@/content/imageSliderData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [startX, setStartX] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1));
    };
    const handleMouseDown = (event) => {
        setStartX(event.clientX);
    };

    const handleMouseUp = (event) => {
        const endX = event.clientX;
        const diff = endX - startX;

        if (diff > 50) {
            prevImage();
        } else if (diff < -50) {
            nextImage();
        }
    };
    return (
        <section
            className="relative !my-0 h-[90vh] overflow-hidden !py-0 md:h-[93vh]"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <div className="relative">
                <div className="hidden lg:block">
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-lg bg-primary p-2 text-2xl text-white"
                        onClick={prevImage}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-lg bg-primary p-2 text-2xl text-white"
                        onClick={nextImage}
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <div
                    style={{ backgroundImage: `url(${imageUrl[currentImageIndex]})` }}
                    className="h-[90vh] w-full bg-cover bg-no-repeat object-cover !py-0 md:h-[93vh]"
                />
            </div>
            <div className="absolute bottom-4 z-[2] flex w-full items-center justify-center gap-1 sm:gap-2 md:bottom-5 lg:bottom-[40px]">
                {imageUrl.map((item: string, index: number) => (
                    <button
                    onClick={()=>setCurrentImageIndex(index)}
                        key={index}
                        className={`h-1 w-5 rounded-[5px] ${
                            currentImageIndex === index ? "bg-primary" : "bg-white"
                        } md:h-[5px]  md:w-[30px]`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Hero;
