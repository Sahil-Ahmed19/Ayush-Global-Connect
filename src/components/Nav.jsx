import { React, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  const items = [
    {
      label: <a href="#">Startup</a>,
      key: "0",
    },
    {
      label: <a href="#">Investor</a>,
      key: "1",
    },
    {
      label: <a href="#">Mentor</a>,
      key: "2",
    },
    {
      label: <a href="#">Incubator</a>,
      key: "3",
    },
    {
      label: <a href="#">Accelerator</a>,
      key: "4",
    },
    {
      label: <a href="#">Government Agency</a>,
      key: "5",
    },
  ];

  return (
    // <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
    //   <h1 className='w-full text-3xl font-bold text-[#5b6730]'>Ayush Startup Hub</h1>
    //   <ul className='hidden md:flex'>
    //     <li className='p-4'>Home</li>
    //     <li className='p-4'>About</li>
    //     <li className='p-4'>Domain</li>
    //     <li className='p-4'>Login</li>
    //     <li className='p-4'>Register</li>
    //   </ul>
    //   <div onClick={handleNav} className='block md:hidden'>
    //       {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    //   </div>
    //   <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    //     <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
    //       <li className='p-4 border-b border-gray-600'>Home</li>
    //       <li className='p-4 border-b border-gray-600'>About</li>
    //       <li className='p-4 border-b border-gray-600'>Domain</li>
    //       <li className='p-4 border-b border-gray-600'>Login</li>
    //       <li className='p-4'>Register</li>
    //   </ul>
    // </div>
    <div className="fixed top-0 h-20 mb-8 w-full flex flex-col justify-end">
      <div className="h-12 z-50 mx-8 rounded-2xl flex bg-violet-50/90 shadow-lg">
        <div className="basis-1/2 flex">
          <h1 className="mx-4 my-auto text-2xl font-semibold text-[#5b6730]">
            Ayush Global Connect
          </h1>
          <span className="h-2/5 my-auto mx-1 bg-stone-500 w-0.5"></span>
          <img src="/navbar/g20.webp" alt="" className="" />
          <span className="h-2/5 my-auto mx-1 bg-stone-500 w-0.5"></span>
          <img src="/navbar/75amrit.webp" alt="" className="pb-2 pl-2" />
          <span className="h-2/5 my-auto mx-1 bg-stone-500 w-0.5"></span>
          <img src="/navbar/ayushLogo.webp" alt="" className="" />
        </div>
        <div className="basis-1/2 flex justify-end">
          <a href="#" className="mx-4 my-auto font-medium hover:text-lime-800">
            Home
          </a>
          <a href="#" className="mx-4 my-auto font-medium hover:text-lime-800">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Network
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </a>
          <a href="#" className="mx-4 my-auto font-medium hover:text-lime-800">
            About Us
          </a>
          <a href="#" className="mx-4 my-auto font-medium hover:text-lime-800">
            Contact Us
          </a>
          <Link
            to="/Login"
            className="mx-4 my-auto font-medium hover:text-lime-800"
          >
            Login/Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
