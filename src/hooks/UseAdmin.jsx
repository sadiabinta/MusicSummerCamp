import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const UseAdmin = () => {
    const {user}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    const {data:isAdmin,isLoading:isAdminLoading} =useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin', res)
            return res.data.admin
        }
    })
    return [isAdmin,isAdminLoading];
};

export default UseAdmin;