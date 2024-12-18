import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

export default function Bento() {
    return (
        <>
            <div className="mx-[24px] mt-[45px]">
                <h2>
                    <span>ESG</span>
                </h2>
                <p>
                    <span>
                        삼성SDI는 환경, 사회, 지배구조 영역에서 리더십을 가지고 지속가능한 발전을 통해 인류 사회에
                        공헌하고자 노력합니다.
                    </span>
                </p>
            </div>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6} p="45px 24px 120px">
                <GridItem position="relative">
                    <a href="#">
                        <Image
                            src="/images/pattern/common/cont_item_esg_01.png"
                            alt="ESG 전략"
                            width={400}
                            height={600}
                            layout="responsive"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
                            ESG 전략
                        </div>
                    </a>
                </GridItem>
                <GridItem position="relative">
                    <a href="#">
                        <Image
                            src="/images/pattern/common/cont_item_esg_02.png"
                            alt="환경"
                            width={200}
                            height={150}
                            layout="responsive"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                            환경
                        </div>
                    </a>
                </GridItem>
                <GridItem position="relative">
                    <a href="#">
                        <Image
                            src="/images/pattern/common/cont_item_esg_03.png"
                            alt="사회"
                            width={200}
                            height={150}
                            layout="responsive"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                            사회
                        </div>
                    </a>
                </GridItem>
                <GridItem position="relative">
                    <a href="#">
                        <Image
                            src="/images/pattern/common/cont_item_esg_04.png"
                            alt="지배구조"
                            width={200}
                            height={150}
                            layout="responsive"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                            지배구조
                        </div>
                    </a>
                </GridItem>
            </Grid>
        </>
    );
}
