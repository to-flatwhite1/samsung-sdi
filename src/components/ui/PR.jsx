import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { mockNews } from '@/data/newsData'; // 뉴스 데이터를 import
import Image from 'next/image';
import { Section } from '../layout/Main';
import ListCha from '../list/ListCha';

export function Pr() {
    return (
        <>
            <div id="pr" className="mb-[180px]">
                <h1 className="text-6xl font-bold text-white mb-[20px]">PR Center</h1>
                <p className="text-lg text-white mb-[60px]">새로운 소식을 알려드립니다.</p>
                {/* Swiper 컴포넌트 설정 */}
                <Swiper
                    slidesPerView={1} // 기본적으로 한 번에 하나의 슬라이드를 표시
                    spaceBetween={10} // 슬라이드 간 간격 설정
                    pagination={{
                        clickable: true, // 페이지네이션을 클릭 가능하도록 설정
                    }}
                    breakpoints={{
                        // 화면 크기별 슬라이드 수 조정
                        640: {
                            slidesPerView: 2, // 화면이 640px 이상일 때 2개의 슬라이드 표시
                            spaceBetween: 20, // 슬라이드 간 간격
                        },
                        768: {
                            slidesPerView: 4, // 화면이 768px 이상일 때 4개의 슬라이드 표시
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4, // 화면이 1024px 이상일 때 4개의 슬라이드 표시
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper" // Swiper에 custom class 추가
                >
                    {/* mockNews 데이터를 순회하며 각 슬라이드에 내용을 넣음 */}
                    {mockNews.map((newsItem, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col h-full justify-between">
                                {/* 슬라이드 이미지 */}
                                <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                    <Image src={newsItem.imageUrl} layout="fill" objectFit="cover" alt="뉴스" />
                                </div>

                                {/* 슬라이드 내용 */}
                                <div className="sec-txt py-4">
                                    {/* 텍스트가 한 줄로 나오게 하고, 넘치면 ...로 처리 */}
                                    <strong className="block text-ellipsis overflow-hidden whitespace-nowrap">
                                        {newsItem.title}
                                    </strong>
                                    <div className="text-sm text-[#888]">{newsItem.date}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
