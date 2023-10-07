import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%),
    url(${featuredImg})`,
      }}
      className="bg-center bg-no-repeat bg-cover text-white px-[3%] py-32 bg-fixed"
    >
      <SectionTitle subHeading="Check it out" heading="From our menu" />
      <div className="md:flex gap-16 items-center justify-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p className="text-2xl">March 20, 2023</p>
          <p className="uppercase text-2xl">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase text-xl font-semibold border-b-[3px] border-b-white rounded-lg py-5 px-7 mt-6">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
