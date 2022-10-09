import React from "react";
import Profile from "../assets/profile2.jpg";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/Logo.png";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800  text-white sm:pt-[60px] pt-[30px] sm:pb-[60px] pb-[30px]"
    >
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center text-white">
        <div className="flex justify-center items-center sm:text-right sm:pb-[60px] pb-[30px]">
          <p className="text-4xl font-bold inline border-b-4 border-[#e45447]">
            Contact
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="shadow-white shadow-lg p-8">
            <form
              method="POST"
              action="https://getform.io/f/1dcdb03a-58fe-4650-8b6e-5c544e1118e0"
              className="flex flex-col w-full max-w-[1100px] mx-auto "
            >
              <label className="text-[20px] mb-[2px]">Name</label>
              <input
                type="text"
                name="name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-[20px]"
              />
              <label className="text-[20px] mb-[2px]">Email Address*</label>
              <input
                type="text"
                name="email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-[20px]"
              />
              <label className="text-[20px] mb-[2px]">Message</label>
              <textarea
                name="message"
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-[20px]"
              ></textarea>
              <button className="text-white group border-2 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:bg-[#e45447] hover:border-[#e45447] ">
                Let's Connect
              </button>
            </form>
          </div>
          <div>
            <div className="flex flex-col text-center ">
              <div className="sm:mt-[25%] text-3xl font-bold text-center my-8">
                <h2>Let's chat.</h2>
              </div>

              <div>
                <p className="">Mail me at:</p>
                <a
                  className="flex justify-center items-center w-full text-[#fff] underline hover:no-underline "
                  href="mailto:kuldeepsinghbhadoriya18@gmail.com"
                >
                  <HiOutlineMail
                    size={25}
                    className="mr-[10px] bg-[#f7f7f7]  rounded text-black hover:scale-125 duration-500"
                  />
                  kuldeepsinghbhadoriya18@gmail.com
                </a>
                <div className="my-8">
                  <p>Let's create something together⭐</p>
                </div>
                <img
                  className=" w-[100px] sm:mx-auto mt-8"
                  src={Logo}
                  alt="Logo"
                />
              </div>
              {/* <div>
                <img
                  className=" w-[300px] sm:mr-auto"
                  src={Profile}
                  alt="Profile"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
