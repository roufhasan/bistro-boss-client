import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, subTitle2, img }) => {
  return (
    <div className="my-14">
      {title && <Cover img={img} title={title} subTitle2={subTitle2} />}
      <div className="grid sm:grid-cols-2 gap-6 px-[3%]">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
