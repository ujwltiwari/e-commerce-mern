import React, { useCallback, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { GoArrowRight, GoHeart, GoPlus } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button.jsx";
import { FiMinus } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Rating from "@/assets/icons/Rating.jsx";

const Content = () => {
  const colors = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/83c25f18edb7d0da9a3f7bfb4f88cc0820b61b91534d6e67e58fe6d7666f0b04?placeholderIfAbsent=true&apiKey=69881ca4efe24956bf287a23a24c936c",
      alt: "Black color option",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce31a9d1b216fa30437381d96fc462e4578d0684f1479f23a0ae4d0631148111?placeholderIfAbsent=true&apiKey=69881ca4efe24956bf287a23a24c936c",
      alt: "White color option",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35adffd33ef3dbec76a82873ab8c4aac3ce424bb41e3cac7b423d3d085b1e916?placeholderIfAbsent=true&apiKey=69881ca4efe24956bf287a23a24c936c",
      alt: "Brown color option",
    },
  ];
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isAdditionalInfoOpen, setAdditionalInfoOpen] = useState(false);
  const [isQuestionsOpen, setQuestionsOpen] = useState(false);
  const [isReviewsOpen, setReviewsOpen] = useState(false);
  const handleQuantityChange = useCallback((type) => {
    setSelectedQuantity((quantity) => {
      if (type === "add") {
        return quantity + 1;
      }
      if (type === "subtract" && quantity > 1) {
        return quantity - 1;
      }
      return quantity;
    });
  }, []);

  return (
    <article className="flex flex-col w-1/2">
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col pb-4 w-full border-b border-solid border-b-gray-200 max-md:max-w-full">
          {/* Review Summary */}
          <div className="flex gap-2.5 items-center items-start text-xs leading-loose text-neutral-900">
            <Rating />
            <div className="self-stretch my-auto">11 Reviews</div>
          </div>

          {/* Product Title */}
          <h1 className="text-left mt-4 text-4xl font-medium tracking-tight leading-none text-neutral-900">
            Tray Table
          </h1>

          {/* Product Description */}
          <p className="text-left  mt-4 w-full text-base leading-7 text-zinc-500 max-md:max-w-full">
            Buy one or buy a few and make every space where you sit more
            convenient. Light and easy to move around with removable tray top,
            handy for serving snacks.
          </p>

          {/* Price Display */}
          <div className="flex flex-wrap gap-3 items-center mt-4 w-full font-medium whitespace-nowrap max-md:max-w-full">
            <div className="self-stretch my-auto text-3xl tracking-tight leading-none text-neutral-900">
              $199.00
            </div>
            <div className="self-stretch my-auto text-xl leading-snug text-zinc-500 line-through">
              $400.00
            </div>
          </div>
        </div>

        {/* Product Measurements */}
        <div className="flex flex-col items-start py-4">
          <div className="text-base font-semibold leading-loose text-zinc-500">
            Measurements
          </div>
          <div className="mt-2 text-xl leading-relaxed text-black">
            17 1/2x20 5/8 &quot;
          </div>
        </div>

        {/* Color Selector */}
        <div className="flex flex-col mt-4">
          <div className="flex flex-col items-start">
            <div className="flex gap-1 items-center text-base font-semibold leading-loose text-zinc-500">
              <div className="self-stretch my-auto">Choose Color</div>
              <MdKeyboardArrowRight size={24} />
            </div>
            <div className="mt-2 text-xl leading-relaxed text-black">Black</div>
          </div>
          <div className="flex gap-4 items-start mt-4">
            {colors.map((color, index) => (
              <img
                key={index}
                loading="lazy"
                src={color.src}
                alt={color.alt}
                className="object-contain shrink-0 aspect-square w-[72px] cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col py-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-6 max-md:max-w-full">
          <div className="flex items-center justify-between px-2 py-2 rounded-lg bg-neutral-100 min-h-[52px] w-[25%]">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange("subtract")}
            >
              <FiMinus size={24} />
            </Button>
            <div>{selectedQuantity}</div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange("add")}
            >
              <GoPlus size={24} />
            </Button>
          </div>
          <Button
            variant="outline"
            className="w-[70%] flex gap-2 border-[#222] justify-center items-center px-10 py-2.5 text-lg font-medium tracking-tight leading-8 text-center whitespace-nowrap bg-white rounded-lg min-w-[240px] text-neutral-900 max-md:px-5 hover:bg-white h-[52px]"
          >
            <GoHeart size={24} />
            Wishlist
          </Button>
        </div>
        <Button className="h-[52px] gap-2 self-stretch px-10 py-2.5 mt-4 w-full text-lg font-medium tracking-tight leading-8 text-center text-white rounded-lg bg-neutral-900 max-md:px-5 max-md:max-w-full">
          Add to Cart
        </Button>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-start py-4 w-full text-xs leading-loose max-md:max-w-full">
        <div className="flex gap-10 items-start whitespace-nowrap">
          <div className="text-zinc-500">SKU</div>
          <div className="text-neutral-900">1117</div>
        </div>
        <div className="flex gap-10 items-start mt-2">
          <div className="text-zinc-500">CATEGORY</div>
          <div className="text-neutral-900">Living Room, Bedroom</div>
        </div>
      </div>

      {/* Accordion Sections */}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-[18px]">
            Additional Info
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col py-2 w-full max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <h3 className="text-sm font-semibold leading-loose text-zinc-500">
                  Details
                </h3>
                <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                  You can use the removable tray for serving. The design makes
                  it easy to put the tray back after use since you place it
                  directly on the table frame without having to fit it into any
                  holes.
                </p>
              </div>
              <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                <h3 className="text-sm font-semibold leading-loose text-zinc-500">
                  Packaging
                </h3>
                <div className="flex flex-col">
                  <h3 className="text-sm leading-loose text-neutral-900">
                    TRAY TABLE
                  </h3>
                  <div className="text-xs leading-6 text-zinc-500">
                    30 1/2x6 1/4x30 1/2 &quot;
                  </div>
                  <div className="text-xs leading-6 text-zinc-500">
                    Weight: 11.36 lbs
                  </div>
                  <div className="text-xs leading-6 text-zinc-500">
                    Package(s): 1
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-medium text-[18px]">
            Questions
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col py-2 w-full max-md:max-w-full">
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold leading-loose text-zinc-500">
                  Question 1
                </h3>
                <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                  Is the tray stable when placed on the table frame?
                </p>
              </div>
              <div className="flex flex-col mt-4">
                <h3 className="text-sm font-semibold leading-loose text-zinc-500">
                  Question 2
                </h3>
                <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                  Can I use the table outdoors?
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-medium text-[18px]">
            Reviews 11
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col py-2 w-full max-md:max-w-full">
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold leading-loose text-zinc-500">
                  Review 1
                </h3>
                <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                  The table is very sturdy and well made. It's perfect for a
                  small living room!
                </p>
              </div>
              <div className="flex flex-col mt-4">
                <h3 className="text-sm font-semibold leading-loose text-zinc-500">
                  Review 2
                </h3>
                <p className="mt-2 text-xs leading-5 text-neutral-900 max-md:max-w-full">
                  I love the removable tray feature! Makes it so much easier to
                  serve snacks.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};

export default Content;
