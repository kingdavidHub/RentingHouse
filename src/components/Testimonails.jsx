import TestimonialCard from "./TestimonialCard";

import Testimonails1 from "./assets/IMAGE1.png";
import Testimonails2 from "./assets/IMAGE2.png";
import Testimonails3 from "./assets/IMAGE3.png";
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

const Testimonails = () => {
  return (
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
            <TestimonialCard
              key={index}
              image={testimonail.img}
              fullName={testimonail.name}
              text={testimonail.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonails;
