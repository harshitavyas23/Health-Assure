import { React, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import UserPic from "../../assets/images/user.png"
import { useNavigate, NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi"
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/doctordetail",
    display: "DocDetail",
  },
  // {
  //   path:"/",
  //   display:""
  // },
];
function Header() {
  const headerRef=useRef(null)
  const menuRef=useRef(null)
  const navigate=useNavigate()
  const auth = localStorage.getItem("user");
  
  const obj = JSON.parse(auth);
  const handleStickyHeader=()=>{
    window.addEventListener("scroll", ()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add("sticky__header")
      }
      else{
        headerRef.current.classList.remove("sticky__header")
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()
    return window.removeEventListener("scroll", handleStickyHeader)
  })
  const toggleMenu=()=>menuRef.current.classList.toggle("show__menu")
    let isServicesPage = location.pathname === "/#services";

  const scrollToServices = () => {
    isServicesPage=true
    navigate("/#services")
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <header className="flex items-center header" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[200px] h-[200px] mt-[150px]">
            <img src={logo}></img>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  {item.path.startsWith("#") ? (
                    <a
                      href={item.path}
                      onClick={scrollToServices}
                      className={
                        isServicesPage
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                      }
                    >
                      {item.display}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                      }
                    >
                      {item.display}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className={`${auth?"":"hidden"}`}>
              <Link to="/userdetail">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={UserPic} className="w-full rounded-full" alt="/" />
                </figure>
              </Link>
            </div>
            {auth ? <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                onClick={handleLogout}>
                Logout
              </button>








              
            </Link>:<Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 curser-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
