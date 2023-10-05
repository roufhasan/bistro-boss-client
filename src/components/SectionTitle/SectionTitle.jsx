const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="w-2/6 mx-auto mb-12 text-center">
      <p className="text-[#D99904] text-xl">---{subHeading}---</p>
      <h1 className="uppercase text-[40px] border-y-4 border-[#E8E8E8] pt-5 pb-6 mt-4">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
