import axios from "axios";
import { useEffect, useState } from "react";
import ContentWrapper from "@/components/ContentWrapper.jsx";
import Layout from "@/components/layout/Layout.jsx";
import Footer from "@/components/layout/Footer.jsx";
import SingleProductCard from "@/modules/Product/components/ProductCard/SingleProductCard.jsx";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const result = await axios.get("http://localhost:3000/products");
    setProducts(result.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products);
  return (
    <>
      <ContentWrapper className="!max-w-[1280px] px-4">
        <Layout />

        {products.length ? (
          <div className="flex flex-wrap">
            {products?.map((product) => {
              const {
                images,
                title,
                price,
                isNew,
                discount,
                rating,
                className,
                _id,
              } = product;
              return (
                <SingleProductCard
                  url={`/admin/product/${_id}`}
                  images={images}
                  title={title}
                  price={price}
                  isNew={false}
                  discount={discount}
                  rating={rating}
                  className="w-[48%] sm:w-1/4 my-3"
                  key={product.id}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-[24px] font-medium">No Products Found</p>
          </div>
        )}
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default ProductsPage;
