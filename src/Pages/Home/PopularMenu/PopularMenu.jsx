import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="px-[3%] mb-[130px]">
      <SectionTitle subHeading="Check it out" heading="from our menu" />
      <div className="grid sm:grid-cols-2 gap-6">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="mt-12 uppercase text-[#1F2937] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white transition-all">
          View full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
