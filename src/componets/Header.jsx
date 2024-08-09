import React, { useState } from "react";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

 



 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-black text-white py-4 font-varela md:px-24 px-6">
      <nav
        className="container flex justify-between items-center"
        style={{ opacity: "1", willChange: "auto" }}
      >
        <div>
          <a href="/" className="text-xl font-bold uppercase">
           
          Mannix Import Mastery
          </a>
        </div>
        <div className="hidden md:block">

        <ul className="flex gap-4">
        <li>
    <a href="/contact" className="inline-block text-sm py-2 px-3 uppercase">
      About
    </a>
  </li>
            <li>
    <a href="/contact" className="inline-block text-sm py-2 px-3 uppercase">
      Portfolio
    </a>
  </li>
  
  <li>
    <a href="/contact" className="inline-block text-sm py-2 px-3 uppercase">
      Contact
    </a>
  </li>
</ul>

        </div>
        <div className="md:hidden md:order-1 order-2">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-4xl pt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 10.586 10.586 5.636 15.536l1.414 1.414L12 12.828l4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z"></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-4xl pt-2"
                height="1em"
                width="1em"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>
            )}
          </button>
        </div>
       
      </nav>
      {menuOpen && (
        <div className="md:hidden">
         <ul className="flex flex-col gap-4 mt-4">
            <li>
              <div>
                <a href="/" className="inline-block text-sm py-2 px-3 uppercase">
                  About
                </a>
              </div>
            </li>
            <li>
             
            </li>
            <li>
              <div>
                <a href="/" className="inline-block text-sm py-2 px-3 uppercase">
                  Contact
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;