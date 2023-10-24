import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(cart);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="py-12 bg-[#f6f6f6]">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle subHeading="My Cart" heading="Wanna add more?" />
      <div className="w-4/5 mx-auto bg-white p-12">
        <div className="font-bold text-3xl uppercase font-Cinzel flex items-center justify-between mb-8">
          <h2>total orders: {cart.length}</h2>
          <h2>total price: ${total}</h2>
          <button className="text-xl text-white py-3 px-4 bg-[#D1A054] rounded-lg">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054] text-white rounded-tl-2xl font-semibold uppercase text-base">
                <th> </th>
                <th>Item image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-xl font-bold">{index + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt=""
                      className="w-[75px] h-[75px] object-cover"
                    />
                  </td>
                  <td className="text-[#737373]">{item.name}</td>
                  <td className="text-[#737373]">${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="p-3 bg-[#B91C1C] text-white rounded-md"
                    >
                      <RiDeleteBinLine size={24} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
