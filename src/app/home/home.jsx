import { mockNews } from '@/data/newsData';

import { Pr } from '@/components/ui/PR';
import Career from '@/components/ui/Career';
import StockCard from '@/components/ui/StockCard';
import Esg from '@/components/ui/Esg';
import Hero from '@/components/ui/Hero';
import BusinessSection from '@/components/ui/Business';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="content">
                <div className="container">
                    <BusinessSection />
                    <Esg />
                    <StockCard />
                    <Career />
                    <Pr />
                </div>
            </section>
        </>
    );
};

export default Home;
