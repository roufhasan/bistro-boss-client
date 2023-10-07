import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss Restaurant</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <CallUs />
      <Recommends />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
