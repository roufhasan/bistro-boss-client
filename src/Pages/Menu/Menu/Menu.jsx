import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      />
      <PopularMenu />
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      />
      <PopularMenu />
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      />
      <PopularMenu />
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      />
      <PopularMenu />
    </>
  );
};

export default Menu;
