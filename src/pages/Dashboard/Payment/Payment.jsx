import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>sum+parseFloat(item.price),0);
    console.log(total)
    const price=parseFloat(total.toFixed(2));
    return (
        <div>
            <h2 className='text-3xl font-bold'>PLEASE MAKE PAYMENT</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} />
            </Elements>
        </div>
    );
};

export default Payment;