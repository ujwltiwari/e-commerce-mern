import CartStepper from "@/modules/Cart/components/CartStepper.jsx";
import ProductList from "@/modules/Cart/components/CartItems.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader.jsx";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCartItems = async () => {
    const result = await axios.get("http://localhost:3000/products/all", {
      params: {
        productIds: cart,
      },
    });
    setLoading(false);
    setProducts(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
  return (
    <>
      <h1 className="font-medium text-[54px]">Cart</h1>
      <CartStepper />
      {loading ? (
        <div className="h-[400px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
};

export default Cart;
