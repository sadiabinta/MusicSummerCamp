
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    console.error(error);
    const navigate=useNavigate();

    const handleNavigate=()=>navigate(-1);
    return (
        <div>
            
            <div className='text-center'>
            <img className='w-1/2 h-1/2 mx-auto my-auto' src="https://i.ibb.co/xqKdP6c/404-error-page-not-found.jpg" alt="404-error-page-not-found" border="0"></img>
            <h5 className='text-5xl'>
                <i>{error.statusText || error.message}</i>
            </h5>
            <button onClick={handleNavigate} className='btn bg-warning my-10 px-10'>Go Back</button>
        </div>
        </div>
    );
};

export default ErrorPage;