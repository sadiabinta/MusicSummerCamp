import { SocialIcon } from "react-social-icons";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
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