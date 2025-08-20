import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "../components/cartitems/CartItems";

const CartPage = () => {
  localStorage.getItem("cart");
  const [totalCart, setTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-full h-full">
      {cart && cart.length ? (
        <div className="w-full flex justify-evenly ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 px-7 w-[80vw]">
            {cart.map((cartItems) => (
              <div key={cartItems.id}>
                <CartItems cartItems={cartItems} />
              </div>
            ))}
          </div>
          <div className="w-[20vw] flex flex-col items-center gap-7 pt-9">
            <h1 className="text-2xl font-semibold">Account Summary</h1>
            <p>
              <span>Total Items : </span>
              <span>{cart.length}</span>
            </p>
            <p>
              <span>Total Amount : </span>
              <span>{totalCart.toFixed(2)}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-7 pt-7 tracking-tighter">
          <h1 className="text-2xl font-semibold text-zinc-800 text-center">
            Sorry nothing is added in cart
          </h1>
          <Link to="/">
            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-white cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
