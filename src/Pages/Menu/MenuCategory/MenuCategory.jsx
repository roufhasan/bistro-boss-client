import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, subTitle2, img }) => {
  return (
    <div className="my-14">
      {title && <Cover img={img} title={title} subTitle2={subTitle2} />}
      <div className="grid sm:grid-cols-2 gap-6 px-[3%]">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="mt-12 uppercase text-[#1F2937] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white transition-all">
            Order your favourite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
