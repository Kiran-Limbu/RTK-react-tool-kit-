import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ProductCart from "../components/porductcarts/ProductCart";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProduct() {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProduct();
  }, []);

  return (
    <div className="min-h-screen w-full">
      {loading ? (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner animation="border" variant="primary" />
          <h1>loading.....</h1>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-7 px-7 w-full h-full">
          {products && products.length
            ? products.map((productItem) => (
                <div key={productItem.id} className="main">
                  <ProductCart productItem={productItem} />
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default HomePage;
