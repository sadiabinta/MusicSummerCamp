import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import { useState } from "react";


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const [pass,setPass]=useState();
    const [confirmPass,setConfirmPass]=useState();
    const onSubmit = data => {
        console.log(data);
        setPass(data.password);
        setConfirmPass(data.confirmPassword);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log('logged user', loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        console.log('saved user', savedUser)
                    })
            })
            .catch(error => console.log(error))

    };
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center text-orange-950">Please Register!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-20 my-20">
                <div className="flex justify-center">
                    <div className="form-control w-1/3  mx-16 ">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-orange-100" {...register("name", { maxLength: 20 })} />
                    </div>
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Email*</span>
                        </label>
                        <input type="email" placeholder="Your Email Address" className="input input-bordered w-full bg-orange-100" {...register("email", { required: true })} />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Password*</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full bg-orange-100" {...register("password", {
                            required: true, minLength: 6, maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                        })} />
                        {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                        {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 characters</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-600">password must have at least one uppercase and one special character</span>}
                    </div>
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Confirm Password*</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full bg-orange-100" {...register("confirmPassword", { required: true, minLength: 6 })} />
                        {
                                pass !== confirmPass && <span className="text-red-600">password need to be Matched!!</span>
                            }
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Photo URL" className="input input-bordered w-full bg-orange-100" {...register("url")} />
                    </div>
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Gender</span>
                        </label>
                        <select className="select select-info  bg-orange-100"
                            {...register("gender")}>
                            <option disabled selected>Select Gender</option>
                            <option value={"female"}>Female</option>
                            <option value={"male"}>Male</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>

                </div>
                <div className="flex justify-center">
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold ">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Phone" className="input input-bordered w-full bg-orange-100" {...register("phone",)} />
                    </div>
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Address</span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered w-full bg-orange-100" {...register("address",)} />
                    </div>
                </div>
                <div className="form-control items-center">
                    <input type="submit" className="btn bg-orange-950 my-10 text-white" value='Register Now' />
                    <SocialLogin></SocialLogin>
                </div>
                <p className="text-center">Already Registered? <Link className="text-orange-600" to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;