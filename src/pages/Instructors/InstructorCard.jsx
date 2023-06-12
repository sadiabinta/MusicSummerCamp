import { useEffect, useState } from "react";



const InstructorCard = () => {
    const [instructor,setInstructor]=useState();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
    .then(res=>res.json())
    .then(data=>{
        setInstructor(data)
        setLoading(false)
    })
    },[])

    if(loading){
        return <div>
            <p>loading...</p>
        </div>
    }
    
    return (
        
        <div className="grid grid-cols-2">
        {instructor.map(teacher=> 
        <div key={teacher._id} className="card card-side bg-base-100 shadow-xl">
        <figure><img src={teacher.image} alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">{teacher.instructorName}</h2>
            <p>Email:{teacher.instructorEmail}</p>
            <p>Course taken: {teacher.classNumber}</p>
            <p>Course Name: {teacher.className}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">See Classes</button>
            </div>
        </div>
    </div>
            )}
        </div>
    );
};

export default InstructorCard;