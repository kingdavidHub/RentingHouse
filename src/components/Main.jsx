import House1 from "../assets/house1.png";
import Services from "./Services";


const Main = () => {
  return (
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
              diverse range of listings, From cozy apartments to spacious family
              houses. With detailed descriptions, vivid photos, and handy
              filters, finding your ideal rental is just a click away.
            </p>
            <button className="rounded-full text-white bg-[#0D4512] py-2 px-6 hover:text-black hover:bg-white border-2 border-[#0D4512] mt-4">
              Countinue
            </button>
          </div>
        </div>
      </section>

      <Services />

      
    </main>
  );
};

export default Main;
