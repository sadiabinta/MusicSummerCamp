import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AddAClass = () => {
    const {user}=useAuth();
    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{

    }
    return (
        <div>
            
            <h4 className="text-3xl font semibold text center text-orange-900 text-center my-10">Add a Class</h4>

            <div className="card flex-shrink-0 w-full shadow-xl bg-base-100 mx-auto">
                <div className="card-body rounded-xl bg-orange-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" py-5">
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" placeholder="Photo URL" className="input input-bordered" {...register("photo", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" className="input input-bordered" {...register("toyName", { required: true})} />
                                </div>
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="Seller Name" className="input input-bordered" {...register("sellerName", { required: true, maxLength: 20 })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                </div>
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub category</span>
                                    </label>
                                    <select className="input input-bordered" {...register("subCategory", { required: true})}>
                                        <option value="actionFigure">Action Figure</option>
                                        <option value="car">Car</option>
                                        <option value="doll">Doll</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" step='any' min='1' placeholder="$ Price" className="input input-bordered" {...register("price", { required: true })} />
                                </div>
                            </div>
                            <div className="md:flex justify-between">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" min='0'max='5' step='any' placeholder="Rating" className="input input-bordered" {...register("rating", { required: true})} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" min='1' placeholder="Quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea className="input-bordered rounded-xl" cols="30" rows="5" {...register("description", { required: true })}></textarea>
                            </div>
                        </div>
                        <input className="btn bg-blue-800" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAClass;