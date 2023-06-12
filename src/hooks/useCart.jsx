import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useCart = () => {
    const {user}=useAuth();
    const token=localStorage.getItem('access-token')
    const { isLoading,refetch, data:cart=[]} = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async ()=>{
            const response=await fetch(`http://localhost:5000/carts?email=${user.email}`,{
                headers:{
                    authorization:`bearer ${token}`
                }
            })
            return response.json();
        },
      })
    

    return [cart,isLoading,refetch];
};

export default useCart;