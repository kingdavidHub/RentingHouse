import VectorHouse from "./assets/Vector_House.png";
import facebook from "./assets/socials/facebook.svg";
import instagram from "./assets/socials/instagram.svg";
import twitter from "./assets/socials/twitter.svg";
import youtube from "./assets/socials/youtube.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="mt-20">
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              <div className="p-6">
                <div className="flex items-start">
                  <h4 className="text-xl sm:text-2xl text-[#475C46]">
                    <span className="font-extrabold">RENT</span>HOMES
                  </h4>
                  <img src={VectorHouse} className="h-7 pt-1" alt="" />
                </div>

                <p className="mt-10">The best and easiest way to rent homes.</p>
              </div>
              <div className="p-6 sm:text-center">
                <h4 className="text-xl text-[#0D4512] font-semibold">
                  Useful links
                </h4>
                <ul>
                  <li className="pt-4">About us </li>
                  <li className="pt-4">Events</li>
                  <li className="pt-4">Blogs FAQ</li>
                  <li className="pt-4">FAQ</li>
                </ul>
              </div>
              <div className="p-6 text-left">
                <h4 className="text-xl text-[#0D4512] font-semibold">
                  Main Menu
                </h4>
                <ul>
                  <li className="pt-4">Home</li>
                  <li className="pt-4">Offers</li>
                  <li className="pt-4">Menus</li>
                  <li className="pt-4">Reservation</li>
                </ul>
              </div>
              <div className="p-6 sm:text-center lg:text-left">
                <h4 className="text-xl text-[#0D4512] font-semibold">
                  Contact Us
                </h4>
                <ul>
                  <li className="pt-4">example@email.com</li>
                  <li className="pt-4">+64 958 248 966</li>
                  <li className="pt-4">Social media</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="my-20 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-normal">
              <ul className="flex space-x-6 p-2">
                <li className="w-11 rounded-full h-11 bg-[#0D4512] p-2">
                  <img src={facebook} alt="facebook" />
                </li>
                <li className="w-11 rounded-full h-11 border-2 border-[#0D4512] bg-[#EDFFEF] p-2">
                  <img src={instagram} alt="facebook" />
                </li>
                <li className="w-11 rounded-full h-11 border-2 border-[#0D4512] bg-[#EDFFEF] p-2">
                  <img src={twitter} alt="facebook" />
                </li>
                <li className="w-11 rounded-full h-11 border-2 border-[#0D4512] bg-[#EDFFEF] p-2">
                  <img src={youtube} alt="facebook" />
                </li>
              </ul>

              <div className="sm:ml-16 mt-5 sm:mt-0 p-2 text-center md:text-justify">
                <p className="inline">
                  Copyright &copy; 2023 Dscode | All rights reserved
                </p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
