import Banner from "../../Banner/Banner";
import PopularProducts from "../../PopularProducts/PopularProducts";
import ServiceTime from "../../ServiceTime/ServiceTime";
import Team from "../../Team/Team";
import About from "../About/About";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <div className="text-center mt-8">
                <button className="border border-[#FF3811] h-12 w-44 rounded text-[#FF3811]">More Services</button>
            </div>
            <ServiceTime></ServiceTime>
            <PopularProducts></PopularProducts>
            <div className="text-center mt-8">
                <button className="border border-[#FF3811] h-12 w-44 rounded text-[#FF3811]">More Products</button>
            </div>
            <Team></Team>
        </div>
    );
};

export default Home;