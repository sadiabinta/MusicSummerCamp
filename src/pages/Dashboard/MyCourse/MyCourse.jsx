import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCourse = () => {
    const [cart,refetch] = useCart();
    console.log(cart)
    const total = cart.reduce((sum, course) => parseFloat(course.price) + sum, 0);
    const handleDelete = (row) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div>
            <div className="flex justify-evenly h-16 font-bold">
                <h1>Total Added Course:{cart.length}</h1>
                <h1>Total Due:${total}</h1>
                <Link to='/dashboard/payment'><button  className="btn">Make Payment</button></Link>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Class name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Instructor Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Seat Available
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(row => <tr key={row._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {row.name}
                            </th>
                            <td className="px-6 py-4">
                                {row.instructor}
                            </td>
                            <td className="px-6 py-4">
                                {row.seatsAvailable
                                }
                            </td>
                            <td className="px-6 py-4">
                                ${row.price}
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-sm"><FaTrash></FaTrash></button>
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default MyCourse;