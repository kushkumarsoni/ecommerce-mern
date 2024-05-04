import { useState } from "react";
import { FaSearch,FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
    const user = {_id:"1",role:"user"};
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const logoutHandler = () => {
        //localStorage.removeItem("userInfo");
        alert("Logout successfully");
    }
  return (
    <nav className="header">
        <Link onClick={()=>setIsOpen(false)} to={"/"}>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to={"/search"}><FaSearch/></Link>
        <Link onClick={()=>setIsOpen(false)} to={"/cart"}><FaShoppingBag/></Link>
        {
            user?._id ? (
                <>
                    <button onClick={()=>setIsOpen((prev) => !prev)}><FaUser/></button>
                    <dialog open={isOpen}>
                        <div>
                            { user?.role === 'admin' && (
                                <Link to="/admin/dashboard">Admin Panel</Link>
                            )}
                            <Link to={"/orders"} >Orders</Link>
                            <button onClick={logoutHandler}>
                                <FaSignOutAlt/>
                            </button>
                        </div>
                    </dialog>
                </> 
            ):<Link onClick={()=>setIsOpen(false)} to={"/login"}><FaSignInAlt/></Link>
        }
    </nav>
  )
}

export default Header