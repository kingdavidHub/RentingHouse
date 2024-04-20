import ServicesCard from "./ServicesCard";

import Checkmark from "../assets/Vector1.png";
import Leaf from "../assets/Vector2.png";
import Security from "../assets/Vector3.png";

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

const Services = () => {
  return (
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
  );
};

export default Services;
