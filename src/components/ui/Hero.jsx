'use client';

import FadeUpText from '@/components/ui/FadeUpText';
import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/images/pattern/common/visual_main_01.jpg';
        img.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            <div
                className={`sub_visual_full absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
                <FadeUpText />
            </div>
        </div>
    );
}
