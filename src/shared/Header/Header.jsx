import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

const Header = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout();
    }
    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-tourist-spot">All Tourist Spot</Link></li>
        <li><Link to="/add-tourist-spot">Add Tourist Spot</Link></li>
        <li><Link to="/list">My List</Link></li>
        {user ? <>
            <li onClick={handleLogout}><Link>Logout</Link></li>
        </>
            :
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar bg-base-100 font-poppins font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link className="w-20 font-bold text-2xl">ETour</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                {user && <div className="navbar-end">
                    <div className="tooltip tooltip-bottom w-10 rounded-full" data-tip={`${user?.displayName}`}>
                        <img className="w-10 rounded-full" alt="avatar" src={user.photoURL? user.photoURL: `https://i.ibb.co/XJdx5xF/blank-profile-picture-973460-960-720.webp`} />
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Header