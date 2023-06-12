
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    console.error(error);
    return (
        <div>
            <div className='text-center'>
            <img className='w-50 h-50 mx-auto my-auto' src="https://i.ibb.co/xqKdP6c/404-error-page-not-found.jpg" alt="404-error-page-not-found" border="0"></img>
            <h5 className='text-5xl'>
                <i>{error.statusText || error.message}</i>
            </h5>
        </div>
        </div>
    );
};

export default ErrorPage;