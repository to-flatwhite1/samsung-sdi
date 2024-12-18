import { useEffect } from 'react';
import { gsap } from 'gsap';

const FadeUpText = () => {
    useEffect(() => {
        gsap.fromTo(
            '.slogan-title',
            { opacity: 0, y: 50 }, // 시작 상태
            { opacity: 1, y: 0, duration: 2, ease: 'power3.out' } // 애니메이션
        );
    }, []);

    return (
        <h2
            className="slogan-title text-3xl lg:text-5xl font-bold leading-tight sm:text-[27px] sm:leading-[1.25] sm:mb-[25px]"
            data-hidden="true"
        >
            <span className="leading-[1.2]">
                To make the world greener and sustainable <br />
                through our innovative technology
            </span>
            <p className="slogan-caption text-lg lg:text-2xl mt-4 __animated" data-hidden="true" data-delay=".3">
                <span>
                    초격차 기술력을 통해
                    <br className="mo" />
                    지속가능한 · 친환경 미래 사회 구현
                </span>
            </p>
        </h2>
    );
};

export default FadeUpText;
