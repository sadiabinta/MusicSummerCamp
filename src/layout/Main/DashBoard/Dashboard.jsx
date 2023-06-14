import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const Dashboard = () => {
    const [isAdmin,setIsAdmin]=useState();
    const {user,loading}=useAuth();
    if(loading){
        console.log('loading...')
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user?.email}`
    ,{
                headers:{
                            authorization:`Bearer ${localStorage.getItem('access-token')}`
                        }
            }
            )
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsAdmin(data.admin)
            })
    },[])
    // const {data : isAdmin}=useQuery(['isAdmin'], async ()=>{
    //     if(user){
    //         const res= await fetch(`http://localhost:5000/users/admin/${user?.email}`,{
    //         headers:{
    //                     authorization:`Bearer ${localStorage.getItem('access-token')}`
    //                 }
    //     })
    //     return res.json();
    //     }
    // })
    //const [isAdmin]=UseAdmin();

    // const isAdmin = true;
    // const {user}=useAuth();
    // axios.get(`http://localhost:5000/users/auth/:${user?.email}`,{
    //     headers:{
    //         authorization:`Bearer ${localStorage.getItem('access-token')}`
    //     }
    // })
    // .then(res=>console.log(res.data))
    // .catch(error=>console.log(error))
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin? <>
                            <li><Link to='/dashboard/home'>Admin Home</Link></li>
                                    <li><Link to='/dashboard/allclasses'>Manage Classes</Link></li>
                                    <li><Link to='/dashboard/allusers'>Manage Users</Link></li>
                            </> : 
                                <>
                                    <li><Link to='/'>User Home</Link></li>
                                    <li><Link to='/'>My Selected Classes</Link></li>
                                    <li><Link to='/'>My Enrolled Classes</Link></li>
                                    <li><Link to='/'>Payment History</Link></li>
                                    
                                </>
                        }
                        <div className="divider"></div>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/classes'>Classes</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;