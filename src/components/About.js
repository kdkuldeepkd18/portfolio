import React from "react";
import Profile from "../assets/profile2.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full z-auto sm:pt-[60px] pt-[30px] sm:pb-[60px] pb-[30px] about-div"
    >
      <div className="justify-center items-center w-full  max-w-[1100px] mx-[auto]">
        <div className="flex justify-center items-center sm:text-right sm:pb-[60px] pb-[30px]">
          <p className="text-4xl font-bold inline border-b-4 border-[#e45447]">
            About
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 px-8">
          <div>
            <p className="text-left text-2xl font-bold mb-[20px] ">
              Get to know me!
            </p>
            <p className=" mb-[10px]">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
            <p className=" mb-[10px]">
              <strong>I'm open to Job opportunities</strong> where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to contact
              me.
            </p>
            <p>
              <strong>Fun Fact:</strong> I am a Farewell singer 😁, If not
              coding, I click pictures or Play chess at leisure.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className=" w-[300px] sm:ml-auto"
              src={Profile}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
