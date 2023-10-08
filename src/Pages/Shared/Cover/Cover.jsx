import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle, subTitle2 }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      strength={-200}
      className="mb-[130px]"
    >
      <section className="bg-ce flex justify-center items-center text-white text-center pt-60 pb-28 px-[3%] font-Cinzel">
        <div className="bg-[#151515] bg-opacity-60 py-36 px-96">
          <h1 className="text-[88px] font-bold">{title}</h1>
          {subTitle && (
            <p className="text-2xl font-semibold mt-2">{subTitle}</p>
          )}
          {subTitle2 && (
            <p className="text-base font-semibold mt-2 font-Inter">
              {subTitle2}
            </p>
          )}
        </div>
      </section>
    </Parallax>
  );
};

export default Cover;
