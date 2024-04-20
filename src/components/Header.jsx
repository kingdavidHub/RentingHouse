import { useState } from "react";
import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-close-menu.svg";
import VectorHouse from "../assets/Vector_House.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-5">
      <div className="flex items-start md:mt-7 cursor-pointer">
        <h4 className="text-xl sm:text-2xl text-[#475C46]">
          <span className="font-extrabold">RENT</span>HOMES
        </h4>
        <img src={VectorHouse} className="h-7 pt-1" alt="" />
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="lg:flex lg:items-start lg:justify-start lg:space-x-9 text-[#475C46] font-semibold">
          <li className="mb-3 lg:mb-0 cursor-pointer">Home</li>
          <li className="mb-3 lg:mb-0 cursor-pointer">About Us</li>
          <li className="mb-3 lg:mb-0 cursor-pointer">Services</li>
          <li className="mb-3 lg:mb-0 cursor-pointer">Reviews</li>
          <li className="mb-3 lg:mb-0 cursor-pointer">Contact Us</li>
        </ul>
      </nav>
      <div className="lg:hidden">
        <button onClick={handleMenu}>
          <img src={isOpen ? menuClose : menuOpen} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
