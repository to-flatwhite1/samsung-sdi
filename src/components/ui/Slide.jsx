import { slides } from '@/data/newsData';
import Image from 'next/image';
import React, { useState } from 'react';

const Slide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === slides.length - 1) {
                return 0; // 마지막 슬라이드에서 첫 번째로 돌아감
            } else {
                return prev + 1; // 그 외에는 한 슬라이드씩 증가
            }
        });
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            if (prev === 0) {
                return slides.length - 1; // 첫 번째 슬라이드에서 마지막으로 돌아감
            } else {
                return prev - 1;
            }
        });
    };

    return (
        <div id="pr" className="mb-[120px]">
            <div className="lg:flex">
                <div>
                    <h1 className="text-6xl font-bold text-white mb-[20px]">PR Center</h1>
                    <p className="text-lg text-white mb-[60px]">새로운 소식을 알려드립니다.</p>
                    <div className="lg:w-80 mb-10 lg:mb-0 flex lg:flex-col justify-between items-center lg:items-start">
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:rotate-90 transition-transform duration-300"
                            aria-label="Next slide"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* 슬라이더 섹션 */}
                <div className="lg:flex-1 overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-300"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`, // 슬라이드 전환 효과 적용
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="min-w-[370px] lg:min-w-[350px] bg-white rounded-2xl overflow-hidden"
                            >
                                <div className="relative h-[300px] lg:h-[250px] overflow-hidden">
                                    <Image
                                        src={slide.imageUrl}
                                        alt={slide.title}
                                        className="w-full h-full transition-transform duration-300 hover:scale-105"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="p-5 h-[300px] lg:h-[320px] flex flex-col">
                                    <div className="text-sm">
                                        <span>{slide.date}</span>
                                        <span className="ml-2">{slide.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mt-8 mb-auto">{slide.title}</h3>
                                    <p className="text-sm mt-4">{slide.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
