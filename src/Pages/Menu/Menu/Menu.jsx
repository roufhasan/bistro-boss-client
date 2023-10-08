import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* ====> Page Cover <==== */}
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      />

      {/* ====> Offered Menu <==== */}
      <SectionTitle subHeading="Don't miss" heading="Today's offer" />
      <MenuCategory items={offered} />

      {/* ====> Dessert Menu <==== */}
      <MenuCategory
        items={desserts}
        title="dessert"
        subTitle2="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertImg}
      />

      {/* ====> Pizza Menu <==== */}
      <MenuCategory
        items={pizza}
        title="pizza"
        subTitle2="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzaImg}
      />

      {/* ====> Salad Menu <==== */}
      <MenuCategory
        items={salad}
        title="salad"
        subTitle2="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladImg}
      />

      {/* ====> Pizza Menu <==== */}
      <MenuCategory
        items={soup}
        title="soup"
        subTitle2="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupImg}
      />
    </>
  );
};

export default Menu;
