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
          <p className="mt-2 font-semibold">Big Profits</p>
        </div>
        <div className="flex flex-col items-center text-center md:pt-12">
          <img src="./satisfaction.png" alt="Complete Client Satisfaction" className="h-24 w-24"/>
          <p className="mt-2 font-semibold">Complete Client Satisfaction</p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  );
};

export default Section1;
