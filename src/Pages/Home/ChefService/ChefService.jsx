import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <section className="px-[3%] mb-24">
      <div
        style={{ backgroundImage: `url(${chefService})` }}
        className="h-[572px] w-full object-cover flex items-center justify-center px-28"
      >
        <div className="px-40 py-24 text-center bg-white">
          <h1 className="text-[45px] font-Cinzel">Bistro Boss</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChefService;
