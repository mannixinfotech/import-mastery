import React from "react";

const benefitsData = [
  {
    image: "./clipboard.png",
    text: "You will get totally transparent & satisfied work.",
  },
  {
    image: "./planet-earth.png",
    text: "Sourcing multiple products from different states",
  },
  {
    image: "./shipped.png",
    text: "Negotiate with shipment line, logistic & transportation behalf of you.",
  },
  {
    image: "./high-quality (1).png",
    text: "We ensure about the quality of products & services.",
  },
  {
    image: "./clock.png",
    text: "You will get on-time delivery of your consignment.",
  },
 
];



const hoverContent = [
  {
     text: "Promoters " ,
     
    sidetext:"Promoters",
    
  photo :"https://stallionglobalindia.com/Content/img/promoters.jpg"},

  { text: "Warehouse" ,
    sidetext:"Warehouse",
    photo:"	https://stallionglobalindia.com/Content/img/wherehouse.jpg",
  },
  { text: "Officers" ,
    sidetext:"Officers",
    photo:"https://stallionglobalindia.com/Content/img/offices.jpg"

  },
];

const About = () => {
  return (
    <div>
      
      <div className="relative">
        <div>
          <img src="./aboutbanner.jpg" alt="/" className="w-full md:h-96 h-60 "/>
        </div>
        <div className="absolute  rounded-md"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="md:text-3xl mb-2 text-xl text-white"> </h2>
        </div>
      </div>
      
      <div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-32 gap-6 md:m-16 m-4">


<div className="rounded overflow-hidden shadow-lg flex flex-col order md:order-1 order-2">
   
    <div className="relative"><a href="/">
            <img className="w-full md:h-80"
                src="https://media.istockphoto.com/id/1395769879/photo/employer-boss-hiring-candidate-after-successful-job-interview.jpg?s=612x612&w=0&k=20&c=vBz0Rrroh43QZ7ZLTdxdp3XZfuIuDjAvzPVQjgCjOM8="
                alt="/"
                />
            <div
                className=" absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
        </a>
        
    </div>
    
    <div className="px-6 py-2 text-center bg-gray-100">
     <span className="text-black  font-bold text-2xl">For Buyer</span>
    </div>
</div>

<div className="order md:order-2 order-1">
  <p className="font-bold text-2xl text-orange-600">How We Work<span className="text-white">(Buyer)</span></p>
  <p className="pt-3">As a Sourcing agent here is all the task,which we manage to fulfill requiremnets of our buyers and deliver their order accordling their need in given timeline.</p>
 <ul className="pt-4">
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We find manufacturers as per buyer requirements.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We negotiate and fix deals in a suitable price range.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We arrange transportation and full consignment.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>If the buyer has a supplier and manufacturer.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We can source products to multiple suppliers.</li>
 </ul>
</div>


</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-32 gap-6 md:m-16 m-4">


<div className=" ">
  <p className="font-bold text-2xl text-orange-600">How We Work<span className="text-white">(Seller)</span></p>
  <p className="pt-3">As a Sourcing agent here is all the task,which we manage to fulfill requiremnets of our buyers and deliver their order accordling their need in given timeline.</p>
 <ul className="pt-4">
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We find manufacturers as per buyer requirements.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We negotiate and fix deals in a suitable price range.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We arrange transportation and full consignment.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>If the buyer has a supplier and manufacturer.</li>
  <li className="flex gap-2 pt-2 "><i className="fa-solid fa-star pt-2 text-orange-600"></i>We can source products to multiple suppliers.</li>
 </ul>
</div>
<div className="rounded overflow-hidden shadow-lg flex flex-col  ">
   
    <div className="relative"><a href="/">
            <img className="w-full md:h-80"
                src="https://www.shutterstock.com/image-photo/professional-male-lawyer-financial-advisor-600nw-2016949892.jpg"
                alt="/"
                />
            <div
                className=" absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
        </a>
        
    </div>
    
    <div className="px-6 py-2 text-center bg-gray-100">
     <span className="text-black  font-bold text-2xl">For Seller</span>
    </div>
</div>

</div>    
          
       
      </div>

      <p className="md:text-2xl text-xl text-center font-bold pt-6">
        What is Your Benefits?
      </p>
      <div className="flex flex-wrap justify-center items-center md:gap-14 gap-5 mt-12">
        {benefitsData.map((benefit, index) => (
          <div className="md:w-48 w-full  p-6 md:m-0 m-3 bg-white rounded-2xl" key={index}>
            <img
              src={benefit.image}
              alt="description"
              className="w-20 h-20 mx-auto"
            />
            <p className="text-black mt-2 text-center">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 m-2">
        {hoverContent.map((content, index) => (
          <div className="relative w-full max-w-md mx-auto my-8" key={index}>
            <div className="relative group">
              <img
                src={content.photo}

                alt="Placeholder"
                className="block w-full h-96"
              />
              {/* Caption styled to be on the right side */}
              <figcaption className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black w-12 h-full flex items-center justify-center">
                <p className="-rotate-90 font-semibold uppercase text-xl">{content.sidetext}</p>
              </figcaption>
              <div className="absolute bottom-0 left-0 right-0 top-0 hover:border-l-8 bg-opacity-75 border-red-500 bg-orange-400 overflow-hidden w-0 h-96 transition-all duration-500 ease-in-out group-hover:w-full flex items-center justify-start">
                <div className="text-white  text-xl  whitespace-nowrap">
                 
                  <img src="./people (2).png" alt="/" className="h-24 w-24 mx-5 "/>
              <p className="uppercase font-bold mx-5 tracking-wide text-2xl">    {content.text}</p>
                  <p className="mx-5 uppercase pt-2">With Deep Knowdlege </p>
                  <p className="mx-5 uppercase">And Domain</p>
                  <p className="mx-5 uppercase"> Experience</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl font-semibold text-center">Global Expansion</p>
        <p className="text-lg text-center p-12">Going international provides businesses access to a world of opportunities. SGIPL, very early on, started utilizing these opportunities to create vital business links in different sectors. Today, we are ready to share this network of partners with businesses that aim to stimulate their global growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-5 text-black">
            <div className="bg-white p-4 border-r-4 border-orange-600 border-l-4 border-t-4 rounded-tl-3xl rounded-tr-3xl hover:scale-95 hover:ease-in duration-200">
               
             <div className="text-center">   <i className="fa-regular fa-eye text-5xl text-orange-600" ></i></div>
                <p className="md:text-3xl text-xl font-semibold text-center text-orange-600 uppercase">Vision</p>
                <ul className="list-disc pl-6 space-y-2 pt-2 md:pt-7 ">
                <li>
                  To be a globally renowned, most preferred trading house known
                  as much for its sustainable products &amp; quality processes
                  as it is for creating a strong global position for Indian
                  industrialists.
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 border-r-4 border-orange-600 border-l-4 border-t-4 rounded-tl-3xl rounded-tr-3xl hover:scale-95 hover:ease-in duration-200 uppercase">
                
               <div className="text-center"> <i className="fa-solid fa-flag text-5xl text-orange-600"></i></div>
                <p className="md:text-3xl text-xl font-semibold text-center text-orange-600">Mision</p>
                <ul className="list-disc pl-6 space-y-2 pt-2 md:pt-7">
                <li>
                  To ceaselessly follow strict quality assurance practices
                </li>
                <li>
                  To uphold reliability in supply and value chain management
                </li>
                <li>
                  To continually adhere to professionalism in all aspects of the
                  business
                </li>
                <li>
                  To strengthen the knowledge-based work culture at all levels
                </li>
              </ul>
            </div>

          
            <div className="bg-white p-4 border-r-4 border-orange-600 border-l-4 border-t-4 rounded-tl-3xl rounded-tr-3xl hover:scale-95 hover:ease-in duration-200 uppercase ">
               
               <div className="text-center"> <i className="fa-solid fa-arrow-up-right-dots text-5xl text-orange-600"></i></div>
                <p className="md:text-3xl text-xl font-semibold text-center text-orange-600">Value</p>
                <ul className="list-disc pl-6 space-y-2 pt-3 md:pt-7">
                <li>Transparency</li>
                <li>Integrity</li>
                <li>Accountability</li>
              </ul>
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;
