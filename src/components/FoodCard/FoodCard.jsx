import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Item added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Log in to order!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="w-full">
      <div className="relative">
        <img src={image} alt="" className="w-full h-[300px] object-cover" />
        <p className="font-semibold text-white bg-[#111827] py-[11px] px-[22px] absolute right-5 top-5">
          ${price}
        </p>
      </div>
      <div className="text-center py-8 px-[40px] bg-[#F3F3F3] h-[300px] flex flex-col">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="mt-2 mb-6">{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="uppercase bg-[#E8E8E8] text-[#BB8506] text-xl font-medium py-5 px-7 border-b-[3px] border-b-[#BB8506] rounded-lg hover:bg-[#1F2937] transition-all mt-auto"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
