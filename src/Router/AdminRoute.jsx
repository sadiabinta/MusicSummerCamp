
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading){
         <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;