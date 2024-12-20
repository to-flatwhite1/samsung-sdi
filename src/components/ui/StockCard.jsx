const StockCard = () => {
    return (
        <div id="stock-card" className="flex flex-col mb-[180px]">
            {/* Title Section */}
            <h1 className="text-6xl font-bold text-white mb-[20px]">IR</h1>
            <p className="text-lg text-white mb-[60px]">투명한 소통을 통해 주주의 이익과 기업의 가치를 제고합니다.</p>

            {/* Cards Container */}
            <div className="flex flex-col gap-4 md:flex-row">
                {/* Main Price Card */}
                <div className="bg-white rounded-lg p-6 flex-1 w-full ">
                    <p className="text-gray-600 text-sm mb-2">실시간 주가정보</p>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold">252,000</span>
                        <span className="text-sm">원</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <span>전일대비</span>
                        <span className="text-red-500">▼ 6,000</span>
                        <span className="text-red-500">-2.33%</span>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="bg-white rounded-lg p-4 w-full md:w-32 flex items-center md:items-center md:justify-center md:flex-col">
                    <div
                        className="mb-0 md:mb-2 text-blue-500 text-2xl"
                        style={{
                            backgroundImage: 'url(/images/pattern/common/ico_ir01.svg)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '40px',
                            width: '40px',
                        }}
                    ></div>
                    <p className="text-sm ml-4 md:ml-0 md:text-center">IR 정보</p>
                </div>

                <div className="bg-white rounded-lg p-4 w-full md:w-32 flex items-center md:items-center md:justify-center md:flex-col">
                    <div
                        className="mb-0 md:mb-2 text-blue-500 text-2xl"
                        style={{
                            backgroundImage: 'url(/images/pattern/common/ico_ir02.svg)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '40px',
                            width: '40px',
                        }}
                    ></div>
                    <p className="text-sm ml-4 md:ml-0">주식 정보</p>
                </div>

                <div className="bg-white rounded-lg p-4 w-full md:w-32 flex items-center md:items-center md:justify-center md:flex-col">
                    <div
                        className="mb-0 md:mb-2 text-blue-500 text-2xl items-center"
                        style={{
                            backgroundImage: 'url(/images/pattern/common/ico_ir03.svg)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '40px',
                            width: '40px',
                        }}
                    ></div>
                    <p className="text-sm ml-4 md:ml-0">재무 정보</p>
                </div>
            </div>
        </div>
    );
};

export default StockCard;
