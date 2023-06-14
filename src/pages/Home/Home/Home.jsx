
import Slider from "../Slider/Slider";
import PopularClass from "./PopularClass/PopularClass";
import { useEffect, useState } from "react";
import PopularInstructor from "./PopularInstructor/PopularInstructor";



const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className="">
        <button onClick={toggleDarkMode} className="btn bg-black text-white">Toggle Dark Mode</button>
        
            <div className={`${darkMode ? 'bg-black text-white' : ''}`}>
                <Slider></Slider>
                <PopularClass></PopularClass>
                <PopularInstructor></PopularInstructor>
            </div>

        </div>

    );
};

export default Home;