const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="w-full">
      <div className="relative">
        <img src={image} alt="" className="w-full h-[300px] object-cover" />
        <p className="font-semibold text-white bg-[#111827] py-[11px] px-[22px] absolute right-5 top-5">
          ${price}
        </p>
      </div>
      <div className="text-center py-8 px-[40px] bg-[#F3F3F3]">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="mt-2 mb-6">{recipe}</p>
        <button className="uppercase bg-[#E8E8E8] text-[#BB8506] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#BB8506] rounded-lg hover:bg-[#1F2937] transition-all">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
