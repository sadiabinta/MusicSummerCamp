import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Slider from "../Slider/Slider";
import PopularClass from "./PopularClass/PopularClass";


const Home = () => {
    return (
        <Flowbite>
      <DarkThemeToggle />
      <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
        </div>
    </Flowbite>
        
    );
};

export default Home;