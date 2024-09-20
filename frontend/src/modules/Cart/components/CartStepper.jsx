import { useLocation } from "react-router-dom";
import { cartStepper } from "@/constants/cart.js";
const CartStepper = () => {
  const pathname = useLocation().pathname.split("/");
  let currentRoute = pathname[pathname.length - 1];
  console.log(currentRoute);
  return (
    <div className="flex items-center gap-12 my-4 font-inter">
      {cartStepper.map((x, idx) => {
        const isSelected = currentRoute === x.link;
        return (
          <div
            key={idx}
            className={`${isSelected ? "border-b-2 border-gray-800 p-2" : ""} w-1/4 font-semibold text-[16px] flex justify-center items-center gap-4 pb-6`}
          >
            <div
              className={`${isSelected ? "bg-[#23262F] text-white" : "bg-[#B1B5C3]"} w-[38px] h-[38px] flex justify-center items-center rounded-full`}
            >
              {idx + 1}
            </div>
            <p>{x.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartStepper;
