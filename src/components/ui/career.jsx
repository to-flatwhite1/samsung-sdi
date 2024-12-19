import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const Career = () => {
    return (
        <div>
            <div id="career" className="mb-[180px]">
                <h1 className="text-6xl font-bold text-white mb-[20px]">CAREER</h1>
                <p className="text-lg text-white mb-[60px]">인재의 가치를 부여하고 존중합니다.</p>
                <Grid
                    templateColumns={{
                        base: '1fr', // On mobile, 1 column
                        md: 'repeat(3, 1fr)', // On medium and larger screens, 3 columns
                    }}
                    gap={6}
                    maxW="6xl"
                    mx="auto"
                >
                    {/* 인재상 카드 */}
                    <GridItem>
                        <div className="bg-[#2B3990] rounded-xl overflow-hidden">
                            <div className="p-6">
                                <div className="mb-2">
                                    <h2 className="text-xl font-bold text-white">인재상</h2>
                                    <p className="text-white/80 text-sm">인재가 기업을 변화 시킨다.</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-xl">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 p-4 rounded-xl mb-3">
                                            <div className="w-6 h-6 text-[#4052B5] flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-3a5 5 0 110-10 5 5 0 010 10z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 text-sm">열정과 도전</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 p-4 rounded-xl mb-3">
                                            <div className="w-6 h-6 text-[#4052B5] flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-13c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 text-sm">창의와 혁신</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-blue-100 p-4 rounded-xl mb-3">
                                            <div className="w-6 h-6 text-[#4052B5] flex items-center justify-center">
                                                <svg viewBox="0 0 24 24" className="w-full h-full">
                                                    <path
                                                        fill="currentColor"
                                                        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-gray-700 text-sm"> 도덕성</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GridItem>

                    {/* 삼성SDI Life 카드 */}
                    <GridItem>
                        <div className="bg-white rounded-xl p-6 h-full relative">
                            <h2 className="text-xl font-bold text-gray-900 mb-1">삼성SDI Life</h2>
                            <p className="text-gray-500 text-sm mb-10">SDI인의 생생한 인터뷰</p>
                            <div className="flex justify-center ">
                                <svg
                                    className="absolute bottom-11 right-9 w-12 h-12 text-[#4052B5]"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </GridItem>

                    {/* 채용 공고 카드 */}
                    <GridItem>
                        <div className="bg-white rounded-xl p-6 h-full relative">
                            <div className="flex justify-between items-start mb-1">
                                <h2 className="text-xl font-bold text-gray-900">채용 공고</h2>
                                <svg
                                    className="w-6 h-6 text-[#4052B5]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-sm mb-10 ">채용공고 보러가기</p>
                            <div className="flex justify-center">
                                <svg
                                    className="w-12 h-12 text-[#4052B5] absolute bottom-11 right-9 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </GridItem>
                </Grid>
            </div>
        </div>
    );
};

export default Career;
