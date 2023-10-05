const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex">
      <img
        className="w-[118px] h-[104px] object-cover rounded-tl-none rounded-[200px] mr-8"
        src={image}
        alt=""
      />
      <div className="max-w-[440px]">
        <h3 className="font-Cinzel text-xl text-[#151515]">
          {name} ------------------
        </h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl ml-1">${price}</p>
    </div>
  );
};

export default MenuItem;
