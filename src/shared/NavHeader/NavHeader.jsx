'use client';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/summer-music-logo.png'
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import {FaShoppingCart} from 'react-icons/fa';


const NavHeader = () => {
  const {user,logOut}=useAuth();
  const [cart]=useCart();
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          alt=""
          className="mr-3 h-9 sm:h-24 rounded-full"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-2xl text-orange-900 font-bold dark:text-white">
          Sunshine <br />Academy
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Link to='/'>Home</Link>
        <Link to='/instructors'>Instructors</Link>
        <Link to='/classes'>Classes</Link>
        {user && <Link to='/dashboard'>Dashboard</Link>}
      </Navbar.Collapse>
      { user?
      <div className="flex md:order-2">
        <Link to='/'><button className="btn gap-2"><FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">+{cart?.length || 0 }</div>
        </button></Link>
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={user.photoURL} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {user.displayName}
            </span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link onClick={handleLogOut}>Sign Out</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      :
      <Link to='/login'><button className="btn px-16 bg-lime-700 text-white">Login</button></Link>}
      
    </Navbar>
  );
};

export default NavHeader;