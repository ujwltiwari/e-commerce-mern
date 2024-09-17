import Bulb from "@/assets/images/bulb.png";
import { Link } from "react-router-dom";
const SingleProductCard = ({
  images,
  title,
  price,
  isNew,
  discount,
  rating,
  className,
  url,
}) => {
  return (
    <Link to={url} className={`flex flex-col ${className ?? ""}`}>
      <div className={`w-full h-full max-w-[262px] max-h-[349px] relative`}>
        <img src={images[0] || Bulb} alt={title} />
        {isNew ? (
          <div className="w-[70px] absolute top-5 left-5 font-semibold uppercase text-[14px] bg-white rounded-sm shadow-md px-4 py-[1px]">
            New
          </div>
        ) : null}
        {discount ? (
          <div
            className={`w-[70px] bg-[#38CB89] text-white absolute ${isNew ? "top-12" : "top-5"} left-5 font-semibold uppercase text-[14px] rounded-sm shadow-md px-4 py-[1px]`}
          >
            {`-${discount}%`}
          </div>
        ) : null}
      </div>
      {title && (
        <p className="text-[16px] font-semibold text-left mt-[16px]">{title}</p>
      )}
      {price && <p className="text-[14px] font-semibold text-left">${price}</p>}
    </Link>
  );
};

export default SingleProductCard;
