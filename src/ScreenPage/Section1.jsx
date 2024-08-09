import React from "react";


const Section1 = () => {
  return (
    <div>
      <div className=""></div>
      <div className="grid md:grid-cols-2 gap-8 md:m-12 grid-cols-1">
        <div>
          <p className="masking p-5  text-white">
            Earn Big{" "}
            <span
              className="pacifico-regular  font-bold"
              style={{ WebkitTextStrokeColor: "orangered" }}
            >
              Profit
            </span>{" "}
            with
            <br />
            Import Business From
            <br />
            <span
              style={{ WebkitTextFillColor: "white" }}
              className="uppercase"
            >
              Your home with guaranteed
            </span>{" "}
            Profit.
          </p>
        </div>

        <img
          src="./mim (1).png"
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:m-12 md:pt-14 gap-8">
          <div className="flex flex-col items-center md:flex-row">
            <div>
              <img src="./badge.png" alt="/" className="h-20 w-20" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
              <p className="text-xl font-semibold">Quality</p>
              <p className="pt-2">
                Our product line with unparalleled
                <br /> quality is in accordance with <br /> clients'
                requirements and conforms to <br />
                global standards.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div>
              <img src="./suspect.png" alt="/" className="h-20 w-20" />{" "}
              {/* Replace with the correct image */}
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
              <p className="text-xl font-semibold">Why Us</p>
              <p className="pt-2">
                We offer competitive prices and
                <br /> exceptional services that set us apart
                <br /> from the competition.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div>
              <img src="./phone.png" alt="/" className="h-16 w-16" />{" "}
              {/* Replace with the correct image */}
            </div>
            <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
              <p className="text-xl font-semibold">Quick Inquiry</p>
              <p className="pt-2">
                Contact us today for quick and
                <br /> reliable responses to all your
                <br /> inquiries and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <p className="md:text-4xl text-xl text-center">We Support In</p>

       
    <div className="flex justify-center pb-12 pt-12">
    <img src="./chart.png" alt="/" className="md:h-[700px]"/>
    </div>
    
    
  </div>
  <div>
    <p className="md:text-4xl text-xl text-center">Why You Choose Us</p>
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <img src="./handshake.png" alt="We Build Relations" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">We Build Relations</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="./man.png" alt="Experience and Professional" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">Experience and Professional</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="./high-quality.png" alt="High Quality Product" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">High Quality Product</p>
        </div>
        <div className="flex flex-col items-center text-center md:pt-12">
          <img src="./save-time.png" alt="We Deliver On Time" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">We Deliver On Time</p>
        </div>
        <div className="flex flex-col items-center text-center md:pt-12">
          <img src="./benefits.png" alt="Price Benefits" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">Price Benefits</p>
        </div>
        <div className="flex flex-col items-center text-center md:pt-12">
          <img src="./satisfaction.png" alt="Complete Client Satisfaction" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">Complete Client Satisfaction</p>
        </div>
      </div>
    </div>
  </div>
  <footer className="bg-black text-white">
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
              <a href="#home" className="text-gray-200 text-lg hover:text-orange-600">
                <i className="fas fa-chevron-circle-right mr-2"></i> Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-200 text-lg hover:text-orange-500">
                <i className="fas fa-chevron-circle-right mr-2"></i> About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-200 text-lg hover:text-orange-500">
                <i className="fas fa-chevron-circle-right mr-2"></i> Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 p-5">
          <h3 className="text-2xl font-normal mb-4">Contact Info</h3>
          <p className="text-lg text-gray-400">
            <i className="fas fa-phone mr-2"></i> +91 XXX-XXX-XXXX
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
  className="w-10 h-10 flex items-center justify-center  hover:bg-white  text-white rounded-full mr-2 hover:bg-transparent hover:text-orange-500 border hover:border-gray-400"
>
  <i className="fab fa-github"></i>
</a>

            <a href="mailto:jigarsable21@gmail.com" aria-label="Mail" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white-500 hover:bg-white rounded-full mr-2 hover:bg-transparent hover:text-orange-500 border hover:border-gray-400">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://twitter.com/jigar_sable" aria-label="Twitter" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white-500 hover:bg-white  rounded-full mr-2 hover:bg-transparent hover:text-orange-500 border hover:border-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://t.me/lifecode5" aria-label="Telegram" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-transparent hover:text-orange-500 border hover:border-gray-400">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-lg py-4 border-t border-white/30">
        Designed with  by 
        <a href="https://www.linkedin.com/in/jigar-sable" className="text-orange-500 ml-1">Mannix Infotech Solutions</a>
      </div>
    </footer>
    </div>
  );
};

export default Section1;
