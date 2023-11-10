
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Components/AutProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/product"> About</NavLink></li>
        <li><NavLink to="/addcard">Services </NavLink></li>
        <li><NavLink to="/log">Blog</NavLink></li> */}

        {
            user?.email ? <>
            <li><NavLink to="/bookings">My Bookings</NavLink></li>
            <li><button onClick={handlelogOut}>Log Out</button></li>
            </>
           : <li><NavLink to="/login">Login</NavLink></li>
            
        }

    </>
    return (
        <div>
            <div className="navbar rounded-lg mt-2 bg-blue-100 h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <Link to="/">
                            <img className="h-16 rounded-full w-44" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ?
                            <button onClick={handlelogOut} className="border border-[#FF3811] text-[#FF3811] font-bold h-12 w-36 text-xl rounded-lg">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="border border-[#FF3811] text-[#FF3811] font-bold h-12 w-36 text-xl rounded-lg">Login</button>
                            </Link>
                    } */}
                    <br />
                    <button className="btn btn-outline btn-warning ml-4 ">Appointment</button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;