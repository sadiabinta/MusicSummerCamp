import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    
    const {data :users=[],refetch}=useQuery(['users'], async ()=>{
        const res= await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleDelete=(user)=>{
            
    }
    const handleMakeAdmin=id=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Role Changed to ADMIN',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <h3 className="font-bold">Total User:{users.length}</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    #
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=> <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td>{index+1}</td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {user.name}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {user.email}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {user.role === 'admin' ? 'admin' : 
                <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost btn-sm"><FaUser></FaUser></button>
                }
                {user.role === 'instructor' ? 'instructor' : 
                <button className="btn btn-ghost btn-sm"><FaUser></FaUser></button>
                }
                </td>
                <td className="px-6 py-4">
                <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm"><FaTrash></FaTrash></button>
                </td>
            </tr>)
            }
        </tbody>
    </table>
</div>
        </div>
    );
};

export default AllUsers;