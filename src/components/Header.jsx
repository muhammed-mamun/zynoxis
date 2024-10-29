import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar px-[10%] h-[6rem]  bg-zinc-900/15 backdrop-blur-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-zinc-700  rounded-box z-[1] mt-3 w-52 p-4 shadow"
          >
            <Link to="#home" className=" hover:underline text-lg">
              <p>Home</p>
            </Link>
            <Link to="#about" className="hover:underline text-lg">
              <p>About</p>
            </Link>
            <Link to="#services" className="hover:underline text-lg">
              <p>Services</p>
            </Link>
            <Link to="#contact" className="hover:underline text-lg">
              <p>Contact Us</p>
            </Link>
          </ul>
        </div>
        <Link to='/' className="text-[#27e0b4] text-xl font-bold uppercase">zynoxis</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu font-bold menu-horizontal px-1 gap-5">
          <Link to="#home" className=" hover:underline text-lg">
            <p>Home</p>
          </Link>
          <Link to="#about" className="hover:underline text-lg">
            <p>About</p>
          </Link>
          <Link to="#services" className="hover:underline text-lg">
            <p>Services</p>
          </Link>
          <Link to="#contact" className="hover:underline text-lg">
            <p className="btn btn-sm btn-outline border-zinc-100 text-zinc-100  hover:bg-[#27e0d3] ">Contact Us</p>
          </Link>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
