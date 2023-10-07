import slide1 from "../../../assets/home/slide1.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommends = () => {
  return (
    <section className="px-[3%] my-[130px]">
      <SectionTitle subHeading="Should Try" heading="Chef recommends" />
      <div className="md:grid grid-cols-3">
        <div className="w-[424px]">
          <img src={slide1} alt="" className="w-full h-[300px] object-cover" />
          <div className="text-center py-8 px-[40px] bg-[#F3F3F3]">
            <h3 className="text-2xl font-semibold">Ceaser Salad</h3>
            <p className="mt-2 mb-6">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="uppercase text-[#BB8506] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#BB8506] rounded-lg bg-[#E8E8E8] hover:bg-[#1F2937] transition-all">
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-[424px]">
          <img src={slide1} alt="" className="w-full h-[300px] object-cover" />
          <div className="text-center py-8 px-[40px] bg-[#F3F3F3]">
            <h3 className="text-2xl font-semibold">Ceaser Salad</h3>
            <p className="mt-2 mb-6">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="uppercase bg-[#E8E8E8] text-[#BB8506] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#BB8506] rounded-lg hover:bg-[#1F2937] transition-all">
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-[424px]">
          <img src={slide1} alt="" className="w-full h-[300px] object-cover" />
          <div className="text-center py-8 px-[40px] bg-[#F3F3F3]">
            <h3 className="text-2xl font-semibold">Ceaser Salad</h3>
            <p className="mt-2 mb-6">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="uppercase bg-[#E8E8E8] text-[#BB8506] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#BB8506] rounded-lg hover:bg-[#1F2937] transition-all">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
