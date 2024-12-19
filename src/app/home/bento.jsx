import { Box } from '@chakra-ui/react';

export default function Bento() {
    return (
        <div id="ESG" className="mb-[180px]">
            <h1 className="text-6xl font-bold text-white mb-[20px]">ESG</h1>
            <p className="text-lg text-white mb-[60px]">
                삼성SDI는 환경, 사회, 지배구조 영역에서 리더십을 가지고 지속가능한 발전을 통해 인류 사회에 공헌하고자
                노력합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* ESG 전략 */}
                <div
                    className="relative h-[390px] bg-cover bg-center rounded-xl"
                    style={{
                        backgroundImage: "url('/images/pattern/common/cont_item_esg_01.png')",
                    }}
                >
                    <a
                        href="#"
                        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                    >
                        ESG 전략
                    </a>
                </div>

                {/* 환경 */}
                <div
                    className="relative h-[390px] bg-cover bg-center rounded-xl"
                    style={{
                        backgroundImage: "url('/images/pattern/common/cont_item_esg_02.png')",
                    }}
                >
                    <a
                        href="#"
                        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                    >
                        환경
                    </a>
                </div>

                {/* 사회 */}
                <div
                    className="relative h-[390px] bg-cover bg-center rounded-xl"
                    style={{
                        backgroundImage: "url('/images/pattern/common/cont_item_esg_03.png')",
                    }}
                >
                    <a
                        href="#"
                        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                    >
                        사회
                    </a>
                </div>

                {/* 지배구조 */}
                <div
                    className="relative h-[390px] bg-cover bg-center rounded-xl"
                    style={{
                        backgroundImage: "url('/images/pattern/common/cont_item_esg_04.png')",
                    }}
                >
                    <a
                        href="#"
                        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                    >
                        지배구조
                    </a>
                </div>
            </div>
        </div>
    );
}
