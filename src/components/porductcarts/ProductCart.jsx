import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-sclice";

const ProductCart = ({ productItem }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handelAddToCart = () => {
    dispatch(addToCart(productItem));
  };

  const handelRemoveFromCart = () => {
    dispatch(removeFromCart(productItem.id));
  };

  return (
    <div className="flex items-center flex-col border-[1px] h-[400px] border-zinc-600 mt-10 rounded-xl">
      <div className="h-[200px] overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={productItem.image}
          alt={productItem.title}
        />
      </div>
      <div>
        <h1 className="w-[200px] mt-5 truncate text-gray-700 font-semibold text-lg">
          {productItem.title}
        </h1>
      </div>
      <div className="flex items-center mt-7">
        <button
          onClick={
            cart.some((items) => items.id === productItem.id)
              ? handelRemoveFromCart
              : handelAddToCart
          }
          className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-white cursor-pointer"
        >
          {cart.some((items) => items.id === productItem.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
