'use client';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../assets/summer-music-logo.png'
import { Link } from "react-router-dom";


const NavHeader = () => {
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
    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
      Sunshine <br />Academy
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      inline
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
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
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link to='/'>Home</Link>
    <Link to='/instructors'>Instructors</Link>
    <Link to='/classes'>Classes</Link>
    <Link to='/dashboard'>Dashboard</Link>
  </Navbar.Collapse>
</Navbar>
    );
};

export default NavHeader;