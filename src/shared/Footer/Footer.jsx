import logo from '../../assets/summer-music-logo.png'
import contact from '../../assets/contact.png'
import { FaAddressCard, FaHandHoldingHeart } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className=''>
            <footer className="footer p-10 text-neutral-content bg-neutral">
                <div className='flex'>
                <img className='rounded-full w-1/3' src={logo} alt="" />
                <h1 className='text-2xl font-semibold pt-6'>SunShine <br /> Academy</h1>
                </div>
                <div>
                    <img src={contact} alt="" />
                    <span className="footer-title">Contact</span>
                    <p>Office hour 9:00-5:00</p>
                    <p>Phone: 123-456-789</p>
                    <a className="link link-hover">Email:info@summer.com</a>
                </div>
                <div>
                    <div><FaAddressCard className='w-16 h-10 text-blue-900'></FaAddressCard></div>
                    <span className="footer-title">Address</span>
                    <p>123 sligh avenue</p>
                    <p>tampa,Florida</p>
                    <p>33617</p>
                </div>
                <div>
                <FaHandHoldingHeart className='w-16 h-10 text-red-700'></FaHandHoldingHeart>
                    <span className="footer-title">About Us</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>Help & Support  |  Privacy Policy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;