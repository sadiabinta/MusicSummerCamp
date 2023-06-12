import InstructorCard from "./InstructorCard";

const Instructors = () => {
    return (
        <div className="relative ">
            <img className=" w-full h-[500px]" src="https://i.ibb.co/P9pVBm4/Instructor-cover.jpg" alt="" />
            <div className="absolute h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <h1 className="text-8xl font-bold text-white relative left-96 top-52">Our <br /> Instructor</h1>
            </div>
            <InstructorCard></InstructorCard>
            
            {/* <div>
                    <img className="w-full h-1/2 mx-auto" src="https://i.ibb.co/6mXkKKy/Summer8.jpg" />
                    <div className="absolute h-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">

                    
                    <h1 className="text-8xl font-bold relative text-white">Our Instructor</h1>
                    </div>
                </div> */}
        </div>
    );
};

export default Instructors;