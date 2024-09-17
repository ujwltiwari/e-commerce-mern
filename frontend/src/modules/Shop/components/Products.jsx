import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import SingleProductCard from "@/modules/Product/components/ProductCard/SingleProductCard.jsx";

const Products = ({ productsToShow = 12, products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * productsToShow;
  const endIndex = startIndex + productsToShow;
  const visibleProducts = products.slice(0, endIndex);
  console.log({ currentPage, startIndex, endIndex, visibleProducts });

  return (
    <>
      <div className="flex justify-between flex-wrap">
        {visibleProducts.map((_, idx) => (
          <SingleProductCard
            key={idx}
            title="Loveseat Sofa"
            price={22.87}
            isNew={false}
            discount={20}
            className="w-[48%] sm:w-1/4 my-3"
          />
        ))}
        {currentPage * productsToShow < products.length && (
          <Button
            variant="outline"
            className="m-auto my-8"
            rounded="full"
            size="lg"
            onClick={handleShowMore}
          >
            Show More
          </Button>
        )}
      </div>
    </>
  );
};

export default Products;
