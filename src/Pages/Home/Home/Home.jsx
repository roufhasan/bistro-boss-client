import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
    </>
  );
};

export default Home;
