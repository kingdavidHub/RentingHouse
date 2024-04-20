import FreshNuts1 from "../assets/Freshnuts1.png";

const Hero = () => {
  return (
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
  );
};

export default Hero;
