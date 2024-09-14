import SingleProductCard from "@/modules/Product/components/ProductCard/SingleProductCard.jsx";

const ImageGrid = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-start items-start gap-4 w-1/2">
      {images.map((image, index) => (
        <SingleProductCard key={index} className="w-[40%]" />
      ))}
    </div>
  );
};

export default ImageGrid;
