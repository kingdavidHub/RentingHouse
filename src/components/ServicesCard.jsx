function ServicesCard(props) {
  return (
    <>
      <div className="bg-[#0D4512E5] lg:w-1/3 rounded-3xl px-6 py-12 text-white text-center">
        <img src={props.img} className="w-24 mx-auto" alt="" />
        <h4 className="uppercase text-3xl p-4 font-semibold">{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default ServicesCard;
