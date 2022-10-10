import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {
  const [position, setPosition] = React.useState({ top: 0, right: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      right: position.right,
      behavior: "smooth",
    });
  });

  const [visibility, setVisibility] = React.useState(false);
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });

  return (
    <>
      <span
        onClick={() =>
          setPosition({ ...position, position: { top: 0, right: 0 } })
        }
        className="hidden lg:flex fixed flex-col top-[70%] right-0 duration-500"
        ref={scrollTop}
      >
        <li className="w-[40px] h-[40px] flex justify-between items-center duration-500 bg-[#000] shadow-md shadow-white">
          <a className="flex justify-between items-center w-full text-[#fff]">
            <FaAngleDoubleUp size={50} />
          </a>
        </li>
      </span>
    </>
  );
};

export default BackToTop;
