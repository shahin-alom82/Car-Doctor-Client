import logo1 from "../../assets/images/banner/1.jpg"
import logo2 from "../../assets/images/banner/2.jpg"
import logo3 from "../../assets/images/banner/3.jpg"
import logo4 from "../../assets/images/banner/4.jpg"
const Banner = () => {
    return (
        <div class="carousel w-full lg:h-[600px] rounded-lg mt-10">
            {/* Slider 1 */}
            <div id="slide1" class="carousel-item relative w-full">
                <img src={logo1} class="w-full" />

                <div class="absolute h-full flex  gap-6 items-start  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=" space-y-7 pl-12 w-1/2 lg:mt-36">
                        <h1 className="lg:text-5xl md:text-sm font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className="lg:mt-4 w-full">
                            <button className="bg-[#FF3811] h-12  w-36 rounded-lg text-white mr-6">Discover More</button>
                            <button className="border border-[#FFF] h-12 w-36 rounded text-[#FFF]">Discover More</button>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider 2 */}
            <div id="slide2" class="carousel-item relative w-full">
                <img src={logo2} class="w-full" />
                <div class="absolute h-full flex  gap-6 items-start  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                    <div className=" space-y-7 pl-12 w-1/2 mt-36">
                        <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 w-full">
                            <button className="bg-[#FF3811] h-12  w-36 rounded-lg text-white mr-6">Discover More</button>
                            <button className="border border-[#FFF] h-12 w-36 rounded text-[#FFF]">Discover More</button>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider 3 */}
            <div id="slide3" class="carousel-item relative w-full">
                <img src={logo3} class="w-full" />
                <div class="absolute h-full flex  gap-6 items-start  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=" space-y-7 pl-12 w-1/2 mt-36">
                        <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 w-full">
                            <button className="bg-[#FF3811] h-12  w-36 rounded-lg text-white mr-6">Discover More</button>
                            <button className="border border-[#FFF] h-12 w-36 rounded text-[#FFF]">Discover More</button>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider 4 */}
            <div id="slide4" class="carousel-item relative w-full">
                <img src={logo4} class="w-full" />
                <div class="absolute h-full flex  gap-6 items-start  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=" space-y-7 pl-12 w-1/2 mt-36">
                        <h1 className="text-5xl font-bold text-white">Affordable Price For Car Servicing</h1>
                        <p className="text-white">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className="mt-4 w-full">
                            <button className="bg-[#FF3811] h-12  w-36 rounded-lg text-white mr-6">Discover More</button>
                            <button className="border border-[#FFF] h-12 w-36 rounded text-[#FFF]">Discover More</button>
                        </div>
                    </div>
                </div>
                <div class="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;