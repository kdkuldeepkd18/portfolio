import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full items-center banner-div ">
      {/* Container */}
      <div className="max-w-[1100px]  mx-auto px-8 flex flex-col justify-center pt-[150px] pb-[80px] sm:pt-[200px] sm:pb-[140px]  ">
        <p className="text-[#fff]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Kuldeep Singh Bhadoriya
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fff]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#fff] py-4 max-w[700px]">
          I develope and code beautifully simple things, and I love what I do.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-start hover:bg-[#000] hover:border-[#000] ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4 mt-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
