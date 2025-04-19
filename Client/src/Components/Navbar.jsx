import React from 'react'

const Navbar = () => {
    return (
        <div>
          <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
            
            {/* 🔹 Left: Logo */}
            <div className="navbar-start">
              <a className="btn btn-ghost text-xl">DEVSKILL</a>
            </div>
    
            {/* 🔹 Center: Menu (Desktop) */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-4">
                <li><a>Home</a></li>
                <li><a>Our Courses</a></li>
                <li><a>Mentors</a></li>
                <li><a>Blog</a></li>
              </ul>
            </div>
    
            {/* 🔹 Right: Button */}
            <div className="navbar-end">
              <a className="btn">Sign-up/Login</a>
            </div>
    
            {/* 🔹 Mobile: Dropdown Menu */}
            <div className="lg:hidden navbar-end">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                  <li><a>Home</a></li>
                  <li><a>Our Courses</a></li>
                  <li><a>Mentors</a></li>
                  <li><a>Blog</a></li>
                </ul>
              </div>
            </div>
    
          </div>
        </div>
      )
}

export default Navbar