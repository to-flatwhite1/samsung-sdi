'use client';
import { useState, useEffect } from 'react';

export default function BusinessSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind의 'sm' 기준 (640px 미만)
        };

        handleResize(); // 초기 실행
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div id="business" className="mb-[180px]">
                <h1 className="text-6xl font-bold text-white mb-[20px]">BUSINESS</h1>
                <p className="text-lg text-white mb-[60px]">초격차 기술경쟁력으로 최고의 품질을 만듭니다.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 첫 번째 카드 */}
                    <div
                        className="relative bg-cover bg-center rounded-xl overflow-hidden"
                        style={{
                            backgroundImage: isMobile
                                ? "url('/images/pattern/common/cont_item_business_01_mo.png')"
                                : "url('/images/pattern/common/cont_item_business_01.png')",
                            height: isMobile ? '150px' : '390px', // 높이 변경
                        }}
                    >
                        <a
                            href="#"
                            className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                        >
                            배터리
                        </a>
                    </div>

                    {/* 두 번째 카드 */}
                    <div
                        className="relative bg-cover bg-center rounded-xl overflow-hidden"
                        style={{
                            backgroundImage: isMobile
                                ? "url('/images/pattern/common/cont_item_business_02_mo.png')"
                                : "url('/images/pattern/common/cont_item_business_02.png')",
                            height: isMobile ? '150px' : '390px', // 높이 변경
                        }}
                    >
                        <a
                            href="#"
                            className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                        >
                            전자재료
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
