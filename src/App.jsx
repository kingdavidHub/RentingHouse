import "./App.css";
import { themeChange } from "theme-change";
import FreshNuts1 from "./assets/Freshnuts1.png";
import House1 from "./assets/house1.png";
import ServicesCard from "./ServicesCard";

import Checkmark from "./assets/Vector1.png";
import Leaf from "./assets/Vector2.png";
import Security from "./assets/Vector3.png";

import VectorHouse from "./assets/Vector_House.png";
import Testimonails1 from "./assets/IMAGE1.png";
import Testimonails2 from "./assets/IMAGE2.png";
import Testimonails3 from "./assets/IMAGE3.png";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const services = [
  {
    title: "Responsive",
    titleImg: Checkmark,
    description:
      "Our commitment to being responsive means that your concerns and efficient.",
  },
  {
    title: "Green",
    titleImg: Leaf,
    description:
      "Experience the convenience of our responsive platform, ensuring swift communication.",
  },
  {
    title: "Security",
    titleImg: Security,
    description:
      "Ensuring swift communication and quick solutions for all your rental needs.",
  },
];

const testimonails = [
  {
    name: "David Anderson",
    img: Testimonails1,
    text: "I loved the experience, renting a home was an pleasure. From the communication was seamless and professional",
  },
  {
    name: "Alex Mitchell",
    img: Testimonails2,
    text: "It was an Amazing Experience, the attention to detail, personalized approach made the entire process stress-free",
  },
  {
    name: "Ryan Bennett",
    img: Testimonails3,
    text: "Our experience was so good with renting services exceeded all expectations. Demonstrated a deep understanding",
  },
];

function App() {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <header>
          <nav className="flex justify-between py-5">
            <div>
              <h4 className="text-xl sm:text-3xl text-[#475C46] inline-block">
                <span className="font-extrabold">RENT</span>HOMES
              </h4>
              <div className="inline-block ml-2">
                <img src={VectorHouse} className="h-7 pt-1" alt="" />
              </div>
            </div>

            <ul className="hidden lg:flex space-x-8 text-[#475C46] font-semibold">
              <li className="hover:border-b-2 hover:border-black  cursor-pointer">
                Home
              </li>
              <li className="hover:border-b-2 hover:border-black cursor-pointer">
                About Us
              </li>
              <li className="hover:border-b-2 hover:border-black cursor-pointer">
                Services
              </li>
              <li className="hover:border-b-2 hover:border-black cursor-pointer">
                Reviews
              </li>
              <li className="hover:border-b-2 hover:border-black cursor-pointer">
                Contact Us
              </li>
            </ul>
          </nav>
        </header>

        <section className="flex flex-col lg:flex-row items-center lg:space-x-9">
          <div className="lg:w-2/4">
            <h1 className="text-[#085C11E8] lg:text-7xl text-5xl text-left p-4">
              Your <br />
              Rental Journey
              <br />
              Begins Here
            </h1>
            <p className="p-4 text-2xl">
              We Make Finding Rentals Easy, Effortless Search, Endless Choices
            </p>
            <div className="p-4 space-x-4">
              <button className="rounded-full text-white bg-[#0D4512] py-2 px-4 hover:text-black hover:bg-white border-2 border-[#0D4512]">
                Rent Now
              </button>
              <button className="rounded-full border-[#0D4512] py-2 px-4 border-2 hover:bg-[#0D4512] hover:text-white">
                Rent Your Place
              </button>
            </div>
          </div>
          <div className="lg:w-2/4">
            <img src={FreshNuts1} alt="" />
          </div>
        </section>

        <main>
          <section>
            <div className="flex flex-col lg:flex-row lg:space-x-9 items-center mt-28">
              <div className="lg:w-2/4 p-4 order-1 lg:order-none">
                <img src={House1} alt="" />
              </div>
              <div className="lg:w-2/4 p-4 ">
                <h2 className="text-[#085C11E8] lg:text-6xl text-5xl text-left">
                  Begin
                  <br />
                  your awesome journey
                </h2>
                <p className="text-2xl text-[#141E15] pt-10">
                  Looking for the perfect home to rent? Our user-friendly house
                  rental website makes your search a breeze. Browse through a
                  diverse range of listings, From cozy apartments to spacious
                  family houses. With detailed descriptions, vivid photos, and
                  handy filters, finding your ideal rental is just a click away.
                </p>
                <button className="rounded-full text-white bg-[#0D4512] py-2 px-6 hover:text-black hover:bg-white border-2 border-[#0D4512] mt-4">
                  Countinue
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="text-center mt-28">
              <h2 className="text-[#085C11E8] lg:text-6xl text-5xl">
                See Our Services
              </h2>
              <p className="text-2xl text-[#141E15] pt-5">
                We Make Finding Rentals Easy, Effortless Search, Endless Choices
              </p>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-9">
              {services.map((service, index) => {
                return (
                  <ServicesCard
                    key={index}
                    title={service.title}
                    img={service.titleImg}
                    text={service.description}
                  />
                );
              })}
            </div>
          </section>

          <section>
            <div className="text-center mt-28">
              <h2 className="text-[#085C11E8] lg:text-6xl text-5xl">
                What Customers Say <br />
                About Our Services
              </h2>
              <p className="text-2xl text-[#141E15] pt-5">
                We Make Finding Rentals Easy, Effortless Search, Endless Choices
              </p>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-9">
              {testimonails.map((testimonail, index) => {
                return (
                  <Testimonials
                    key={index}
                    image={testimonail.img}
                    fullName={testimonail.name}
                    text={testimonail.text}
                  />
                );
              })}
            </div>
          </section>
        </main>

        {/* Footer  */}
        <Footer />
      </div>
    </>
  );
}

export default App;
