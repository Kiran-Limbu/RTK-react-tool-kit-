import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

const CartPage = () => {
  const [totalCart, setTotalCart] = useState(0)

    const cart = useSelector(state => state.cart);

  useEffect(() =>{
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
  },[cart])

  console.log(totalCart, cart);
  
  return (
    <div>
      <h1>this is cart</h1>
    </div>
  )
}

export default CartPage
