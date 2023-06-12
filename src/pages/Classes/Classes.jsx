import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Classes = () => {
    const {user}=useAuth();
    const [classes,setClasses]=useState();
    const [loading,setLoading]=useState(true);
    const [added,setAdded]=useState(false);
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setClasses(data)
        setLoading(false)
    })
    },[])
    const handleAddToCart=course=>{
        console.log(course);
        if(user){
            const addedCourse={courseId:course._id,name:course.className,image:course.classImage,instructor:course.instructorName,instructorEmail:course.instructorEmail,seatsAvailable:course.availableSeats,price:course.price,email:user.email};
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(addedCourse)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Added to cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      setAdded(true);
                }
                
            })
        }
        else{
            Swal.fire({
                title: 'Please login to add Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login', {state:{from:location}});
                }
              })
        }
    }

    if(loading){
        return <div>
            <p>loading...</p>
        </div>
    }
    return (
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Class
                </th>
                <th scope="col" className="px-6 py-3">
                    Instructor Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Available seats
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                classes.map(course=> <tr key={course._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-32 p-4">
                    <img src={course.classImage} alt="Apple Watch"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {course.className}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {course.instructorName}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {course.availableSeats}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {course.price}
                </td>
                <td className="px-6 py-4">
                    <button className={`${added? 'disabled':'btn bg-orange-900 text-white'}`} onClick={()=>handleAddToCart(course)} 
                    
                    >Select</button>
                </td>
            </tr>)
            }
        </tbody>
    </table>
</div>



//         <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Class</th>
//         <th>Instructor</th>
//         <th>Available seats</th>
//         <th>Price</th>
//         <th></th>
//       </tr>
//     </thead>
//     { classes.map(course=> <tbody key={course._id}>
//       <tr>
//         <td>
//             <img src={course.classImage} alt="" />
//             {/* <div className="avatar">
//               <div className="mask mask-squircle w-12 h-12">
//                 <img src={course.classImage} alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div> */}
//             </td>
//               <td>
//               <div className="font-bold">{course.className}</div>
//               </td>
//         <td>
//             {course.instructorName}
//         </td>
//         <td>{course.availableSeats}</td>
//         <td>{course.price}</td>
//         <th>
//           <button className="btn btn-ghost btn-xs">Select</button>
//         </th>
//       </tr>

//     </tbody>)}

    
//   </table>
// </div>
    );
};

export default Classes;