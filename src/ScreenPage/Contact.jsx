import React from 'react'

const Contact = () => {
  return (
    <div>
       
         <section className="bg-black min-h-[60vh] md:pt-20 pt-8" id="contact">
      <h2 className="md:text-4xl text-3xl font-bold text-center text-white">
        <i className="fas fa-headset"></i> Get in <span className="text-orange-600">Touch</span>
      </h2>

      <div className="max-w-[1050px] w-full bg-white  mx-auto my-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-10">
          <div className="block  md:max-w-[60%] ">
            <img
              draggable="false"
              src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
              alt="Contact"
              className="w-full md:h-[30rem]  h-[20rem] relative"
            />
          </div>

          <form id="contact-form" className="w-full md:w-[45%] md:mr-14">
            <div className="flex flex-col space-y-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full h-12 pl-12 pr-4 text-lg border border-gray-600 rounded-md bg-blue-100 outline-none focus:border-purple-700"
                />
                <i className="fas fa-user absolute left-4 text-gray-600 text-lg pointer-events-none"></i>
              </div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 pl-12 pr-4 text-lg border border-gray-600 rounded-md bg-blue-100 outline-none focus:border-purple-700"
                />
                <i className="fas fa-envelope absolute left-4 text-gray-600 text-lg pointer-events-none"></i>
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full h-12 pl-12 pr-4 text-lg border border-gray-600 rounded-md bg-blue-100 outline-none focus:border-purple-700"
                />
                <i className="fas fa-phone-alt absolute left-4 text-gray-600 text-lg pointer-events-none"></i>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full min-h-[130px] max-h-[230px] pl-12 pr-4 pt-4 text-lg border border-gray-600 rounded-md bg-blue-100 outline-none focus:border-purple-700"
                ></textarea>
                <i className="fas fa-comment-dots absolute left-4 top-6 text-gray-600 text-lg pointer-events-none"></i>
              </div>
            </div>

            <div className="flex  mt-6">
              <button
                type="submit"
                className="flex items-center px-6 py-3 text-xl font-semibold text-white transition duration-300 ease-in-out bg-orange-600 rounded-md shadow-lg"
              >
                Submit <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2823723163488!2d72.53097887505295!3d23.05010711530057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859d5d0e54e5%3A0xa0886a46ade92297!2sPushti%20Heights!5e0!3m2!1sen!2sin!4v1723441008683!5m2!1sen!2sin" width="100%" className='md:h-80 h-44' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='\/'></iframe>
    </div>
  )
}

export default Contact