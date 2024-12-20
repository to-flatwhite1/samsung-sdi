'use client';
import FadeUpText from '@/components/ui/FadeUpText';
import Image from 'next/image';
import React from 'react';

const IntroducePage = () => {
    return (
        <>
            <div className="relative w-full h-screen">
                <Image src="/images/pattern/sdi2.png" layout="fill" alt="" className="object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-6xl font-bold mb-[20px]">회사소개</h1>
                    <p className="text-lg mb-[60px]">친환경 에너지와 첨단 소재 분야를 이끌어 나갑니다.</p>
                </div>
            </div>
            <section className="content">
                <div className="container">
                    {/* Core Value 텍스트에 스타일 적용 */}
                    <div
                        className="max-w-[1200px] mx-auto mb-[40px] text-white text-left"
                        style={{ lineHeight: '1.4' }}
                    >
                        <h1 className="text-6xl font-bold mb-[20px]">Core Value</h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* 카드들 */}
                        <div className="relative h-[238px] md:h-[250px] bg-white bg-center rounded-xl">
                            <a
                                href="#"
                                className="absolute inset-0 flex items-center justify-center text-[#283895] text-3xl font-bold"
                            >
                                Technology
                                <br />
                                Innovation
                            </a>
                        </div>
                        <div className="relative h-[238px] md:h-[250px] bg-white bg-center rounded-xl">
                            <a
                                href="#"
                                className="absolute inset-0 flex items-center justify-center text-[#283895] text-3xl font-bold"
                            >
                                Profitable
                                <br />
                                Growth
                            </a>
                        </div>
                        <div className="relative h-[238px]  md:h-[250px] bg-white bg-center rounded-xl">
                            <a
                                href="#"
                                className="absolute inset-0 flex items-center justify-center text-[#283895] text-3xl  font-bold"
                            >
                                Operational
                                <br />
                                Competency
                            </a>
                        </div>
                        <div className="relative h-[238px]  md:h-[250px] bg-white bg-center rounded-xl">
                            <a
                                href="#"
                                className="absolute inset-0 flex items-center justify-center text-[#283895] text-3xl font-bold"
                            >
                                Sustainability
                                <br /> Leadership
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntroducePage;
