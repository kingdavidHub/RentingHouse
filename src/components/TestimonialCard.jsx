function TestimonialCard(props) {
  return (
    <>
      <div className="border-greenBorder border-4 p-6 rounded-tr-custom-1 rounded-bl-custom-1 lg:w-1/3 text-[#141E15] rounded-tl-3xl">
        <div className="mx-auto text-center">
          <img src={props.image} className="mx-auto" alt="" />
          <h4 className="text-3xl p-4 font-bold text-[#26582AE0]">
           {props.fullName}
          </h4>
          <p className="">
            &quot;{props.text}&quot;.
          </p>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
