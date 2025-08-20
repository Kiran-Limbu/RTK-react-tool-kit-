import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-sclice";

const CartItems = ({ cartItems }) => {
    const dispatch = useDispatch();

     const handelRemoveFromCart = () => {

    dispatch(removeFromCart(cartItems.id));

    localStorage.removeItem(cartItems.id);
  };

  return (
      <div className="flex flex-col items-center justify-center border-[1px] border-zinc-800 rounded-lg gap-7 p-5">
      <div className="h-[200px] overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={cartItems.image}
          alt={cartItems.title}
        />
      </div>
      <div>
        <h1 className="w-[200px] mt-5 truncate text-gray-700 font-semibold text-lg">
          {cartItems.title}
        </h1>
      </div>
      <div className="flex items-center mt-7">
        <button
          onClick={handelRemoveFromCart}
          className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-white cursor-pointer"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
