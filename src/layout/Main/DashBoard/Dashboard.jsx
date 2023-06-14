
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";


const Dashboard = () => {
    const [role,setRole]=useState();
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
                setRole(data.role)
            })
    },[]);

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
                            {role === 'admin' && (
                                <>
                                <li><Link to='/dashboard/home'>Admin Home</Link></li>
                                        <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
                                        <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
                                </>
                              )}
                              {role === 'instructor' && (
                                <>
                                <li><Link to='/dashboard/home'>Instructor Home</Link></li>
                                        <li><Link to='/dashboard/addclass'>Add a Class</Link></li>
                                        <li><Link to='/dashboard/myclasses'>My Classes</Link></li>
                                </>
                              )}
                              {role === 'student' && (
                                <>
                                <li><Link to='/'>User Home</Link></li>
                                <li><Link to='/dashboard/selectedclass'>My Selected Classes</Link></li>
                                <li><Link to='/dashboard/enrolledclasses'>My Enrolled Classes</Link></li>
                                <li><Link to='/dashboard/paymenthistory'>Payment History</Link></li>
                                
                            </>
                              )}
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