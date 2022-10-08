import React from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const FinePrint = () => {
  return (
    <div name="about" className="w-full  bg-[#000000] text-[#ffffff]">
      <div className="flex flex-col justify-center items-center w-full pb-[2rem] pt-[2rem] sm:pt-[6rem] sm:pb-[6rem]">
        <div className="max-w-[1280px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left  ">
            <h3 className="text-[20px] sm:text-2xl font-bold uppercase mb-4 sm:mb-8">
              Kuldeep Singh Bhadoriya
            </h3>
            <p className="text-[14px] sm:text-[16px] mb-4">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className=" ">
            <div className="text-left sm:max-w-[205px] ml-auto">
              <h3 className="text-[20px] sm:text-2xl font-bold uppercase mb-4 sm:mb-8">
                Social
              </h3>
            </div>
            <div className=" flex sm:flex-row-reverse ">
              <ul className=" flex">
                <li className="w-[55px] h-[55px] pl-0 sm:pl-4  ">
                  <a
                    className="flex w-full text-[#ffffff]"
                    href="https://www.linkedin.com/in/kdkuldeepkd18/"
                    target="_blank"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li className="w-[55px] h-[55px] pl-0 sm:pl-4  ">
                  <a
                    className="flex w-full text-[#ffffff]"
                    href="https://github.com/kdkuldeepkd18"
                    target="_blank"
                  >
                    <FaGithub size={30} />
                  </a>
                </li>
                <li className="w-[55px] h-[55px] pl-0 sm:pl-4  ">
                  <a
                    className="flex w-full text-[#ffffff]"
                    href="https://www.instagram.com/singhgraphy18/"
                    target="_blank"
                  >
                    <FaInstagram size={30} />
                  </a>
                </li>
                <li className="w-[55px] h-[55px] pl-0 sm:pl-4  ">
                  <a
                    className="flex w-full text-[#ffffff]"
                    href="https://twitter.com/kdkuldeepkd18"
                    target="_blank"
                  >
                    <FaTwitter size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full ">
        <div className="max-w-[1200px] items-center w-full px-4 border-t-[1px] border-[#444444] pb-[1rem] pt-[1rem] sm:pt-[3rem] sm:pb-[3rem]">
          <p className="text-[12px] text-center">
            © Copyright 2022. Made by{" "}
            <a className="font-bold underline hover:no-underline" href="/">
              Kuldeep Singh Bhadoriya
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinePrint;
