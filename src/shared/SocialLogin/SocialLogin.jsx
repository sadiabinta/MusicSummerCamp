import { SocialIcon } from "react-social-icons";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate=useNavigate();
    const location=useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(savedUser)
                        })
                        .then(res=>res.json())
                        .then(()=>{
                                navigate(from,{replace:true})
                            
                        })

                
            })
    }
    return (

        <div>
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn}><SocialIcon network="google" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;