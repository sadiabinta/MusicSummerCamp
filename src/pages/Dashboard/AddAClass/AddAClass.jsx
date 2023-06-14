// import { useContext } from "react";
import { useForm } from "react-hook-form";
// import Swal from 'sweetalert2'
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const AddAClass = () => {
    const {user}=useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (classData,event) => {
        console.log(classData);
        fetch('http://localhost:5000/classes/instructor',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(classData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class has been Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            //event.target.reset();
        })
    };
    return (
        <div>
            
             <h4 className="text-3xl font semibold text center text-orange-900 text-center my-10">Add a Class</h4>

             <div className="card flex-shrink-0 w-full shadow-xl bg-base-100 mx-auto">
                 <div className="card-body rounded-xl bg-orange-100">
                     <form onSubmit={handleSubmit(onSubmit)}>
                         <div className=" py-5">
                             <div className="md:flex justify-between">
                                 <div className="form-control">
                                     <label className="label">
                                         <span className="label-text">Photo URL</span>
                                     </label>
                                     <input type="url" placeholder="Photo URL" className="input input-bordered" {...register("photo")} />
                                 </div>
                                 <div className="form-control">
                                     <label className="label">
                                         <span className="label-text">Class Name</span>
                                     </label>
                                     <input type="text" placeholder="Class Name" className="input input-bordered" {...register("className")} />
                                 </div>
                             </div>
                             <div className="md:flex justify-between">
                                 <div className="form-control">
                                     <label className="label">
                                         <span className="label-text">Instructor Name</span>
                                     </label>
                                     <input type="text" readOnly defaultValue={user?.displayName || 'xyz'}  placeholder="Instructor Name" className="input input-bordered" {...register("instructorName")} />
                                 </div>
                                 <div className="form-control">
                                     <label className="label">
                                         <span className="label-text">Instructor Email</span>
                                     </label>
                                     <input type="email" readOnly defaultValue={user?.email} placeholder="Email" className="input input-bordered" {...register("email")} />
                                 </div>
                             </div>
                            
                             <div className="md:flex justify-between">
                                 <div className="form-control">
                                     <label className="label">
                                         <span className="label-text">Price</span>
                                     </label>
                                     <input type="number" step='any' placeholder="Price" className="input input-bordered" {...register("price")} />
                                 </div>
                                 <div className="form-control">
                                     <label className="label">
                                         <span className="label-text">Available seats</span>
                                     </label>
                                     <input type="number" min='1' placeholder="Available Seats" className="input input-bordered" {...register("availableSeats")} />
                                 </div>
                             </div>
                             <div className="form-control">
                                 <label className="label">
                                     <span className="label-text">Status</span>
                                 </label>
                                 <input type="text" readOnly defaultValue={'pending'} placeholder="Status" className="input input-bordered" {...register("status")} />
                             </div>
                         </div>
                         <div className="form-control items-center">
                     <input type="submit" className="btn bg-orange-900 my-10 text-white" value='Submit' />
                 </div>
                        
                     </form>
                 </div>
             </div>
         </div>
    );
};

export default AddAClass;


// import { useForm } from 'react-hook-form';
// import useAuth from '../../../hooks/useAuth';

// const AddAClass = () => {
//     const {user}=useAuth();
//     const { register, handleSubmit } = useForm();
//     const onSubmit = (d) =>{
//         console.log('Hello')
//     }
//     return (
//         <div>
            
//             <h4 className="text-3xl font semibold text center text-orange-900 text-center my-10">Add a Class</h4>

//             <div className="card flex-shrink-0 w-full shadow-xl bg-base-100 mx-auto">
//                 <div className="card-body rounded-xl bg-orange-100">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className=" py-5">
//                             <div className="md:flex justify-between">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Photo URL</span>
//                                     </label>
//                                     <input type="url" placeholder="Photo URL" className="input input-bordered" {...register("photo")} />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Class Name</span>
//                                     </label>
//                                     <input type="text" placeholder="Class Name" className="input input-bordered" {...register("className")} />
//                                 </div>
//                             </div>
//                             <div className="md:flex justify-between">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Instructor Name</span>
//                                     </label>
//                                     <input type="text" readOnly defaultValue={user?.displayName || ''}  placeholder="Instructor Name" className="input input-bordered" {...register("instructorName")} />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Instructor Email</span>
//                                     </label>
//                                     <input type="email" readOnly defaultValue={user?.email} placeholder="Email" className="input input-bordered" {...register("email")} />
//                                 </div>
//                             </div>
                            
//                             <div className="md:flex justify-between">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Price</span>
//                                     </label>
//                                     <input type="number" step='any' placeholder="Price" className="input input-bordered" {...register("price")} />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Available seats</span>
//                                     </label>
//                                     <input type="number" min='1' placeholder="Available Seats" className="input input-bordered" {...register("availableSeats")} />
//                                 </div>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Status</span>
//                                 </label>
//                                 <input type="text" readOnly defaultValue={'pending'} placeholder="Status" className="input input-bordered" {...register("status")} />
//                             </div>
//                         </div>
//                         <div className="form-control items-center">
//                     <input type="submit" className="btn bg-orange-900 my-10 text-white" value='Submit' />
//                 </div>
                        
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddAClass;