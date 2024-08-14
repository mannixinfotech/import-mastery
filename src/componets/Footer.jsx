import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-black text-white border-t border-white/30">
      <div className="container mx-auto flex flex-wrap justify-center py-10">
        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl font-normal mb-4">Mannix Import Mastery</h3>
          <p className="text-gray-400 text-lg">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
          </p>
        </div>

        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl font-normal mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="text-gray-200 text-lg hover:text-orange-600">
                <i className="fas fa-chevron-circle-right mr-2"></i> Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-200 text-lg hover:text-orange-600">
                <i className="fas fa-chevron-circle-right mr-2"></i> About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="text-gray-200 text-lg hover:text-orange-600">
                <i className="fas fa-chevron-circle-right mr-2"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-200 text-lg hover:text-orange-600">
                <i className="fas fa-chevron-circle-right mr-2"></i> Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl font-normal mb-4">Contact Info</h3>
          <p className="text-lg text-gray-400">
            <i className="fas fa-phone mr-2"></i> +91 76004 83333
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-envelope mr-2"></i> importmastery@gmail.com
          </p>
          <p className="text-lg text-gray-400">
            <i className="fas fa-map-marked-alt mr-2"></i> Gurukul, Ahmedabad
          </p>
          <div className="flex mt-4">

            <a
  href="/"
  aria-label="GitHub"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center  hover:bg-white  text-white rounded-full mr-2 hover:bg-transparent hover:text-orange-600 border hover:border-gray-400"
>
  <i className="fab fa-github"></i>
</a>

            <a href="/" aria-label="Mail" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white-500 hover:bg-white rounded-full mr-2 hover:bg-transparent hover:text-orange-600 border hover:border-gray-400">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="/" aria-label="Twitter" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white-500 hover:bg-white  rounded-full mr-2 hover:bg-transparent hover:text-orange-600 border hover:border-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" aria-label="Telegram" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-transparent hover:text-orange-600 border hover:border-gray-400">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-lg py-4 border-t border-white/30">
        Designed with by 
        <a href="/" className="text-orange-600 ml-1">Mannix Infotech Solutions</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer
