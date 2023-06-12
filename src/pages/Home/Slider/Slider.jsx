import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
            <Carousel>
                <div>
                    <img className="" src="https://i.ibb.co/6mXkKKy/Summer8.jpg" />
                    <div className="absolute h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 pt-24 flex-row justify-">
                    <p className="text-yellow-500">spend a great week with</p>
                    <h1 className="text-8xl text-white font-bold">SUNSHINE MUSIC <br /> SUMMER CAMP</h1>
                    </div>
                    <div>
                        <button className="btn bg-red-500 border-none text-white px-10 mt-36">REGISTER NOW</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/t8NWR17/Summer6.jpg" />
                    <div className="absolute h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 pt-24 ">
                    <p className="text-yellow-500">you will find</p>
                    <h1 className="text-8xl text-white font-bold">CHALLENGES AND <br /> NEW RELATIONSHIPS</h1>
                    </div>
                    <div>
                        <button className="btn bg-red-500 border-none text-white px-10 mt-36">REGISTER NOW</button>
                    </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/NVf3mFD/Summer-banner3.jpg" />
                    <div className="absolute h-full left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 pt-24 ">
                    <p className="text-yellow-500">children summer camp</p>
                    <h1 className="text-8xl text-white font-bold">A CHANCE TO PROVIDE <br /> MUSICAL EXPERIENCE</h1>
                    </div>
                    <div>
                        <button className="btn bg-red-500 border-none text-white px-10 mt-36">REGISTER NOW</button>
                    </div>
                    </div>
                </div>
            </Carousel>
    );
};

export default Slider;