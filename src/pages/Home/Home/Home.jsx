import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <Flowbite>
      <DarkThemeToggle />
      <div>
            <Slider></Slider>
        </div>
    </Flowbite>
        
    );
};

export default Home;