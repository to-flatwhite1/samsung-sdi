import { mockNews } from '@/data/newsData';
import Hero from './hero';
import Bento from './bento';
import Business from './business';
import Ir from '@/components/ui/ir';
import StockCard from '@/components/ui/ir';
import Career, { CardContainer } from '@/components/ui/career';
import { Pr } from '@/components/ui/PR';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="content">
                <div className="container">
                    <Business />
                    <Bento />
                    <Career />
                    <StockCard />
                    <Pr mockNews={mockNews} />
                </div>
            </section>
        </>
    );
};

export default Home;
