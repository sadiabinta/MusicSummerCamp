import logo from '../../assets/summer-music-logo.png'
import contact from '../../assets/contact.png'

const Footer = () => {

    return (
        <div className='bg-yellow-950'>
            <footer className="footer p-10 text-neutral-content">
                <div className='flex'>
                <img className='rounded-full w-1/3' src={logo} alt="" />
                <h1 className='text-2xl font-semibold pt-6'>Sun Shine <br /> Academy</h1>
                </div>
                <div>
                    <img src={contact} alt="" />
                    <span className="footer-title">Contact</span>
                    <p>Office hour 9:00-5:00</p>
                    <p>Phone: 123-456-789</p>
                    <a className="link link-hover">Email:info@summer.com</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
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