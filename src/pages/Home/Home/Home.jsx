import { DarkThemeToggle, Flowbite } from "flowbite-react";


const Home = () => {
    return (
        <Flowbite>
      <DarkThemeToggle />
      <div>
            <h1>Home</h1>
            <input type="checkbox" className="toggle" checked />
        </div>
    </Flowbite>
        
    );
};

export default Home;