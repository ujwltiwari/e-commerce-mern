import ImageGrid from "@/modules/Product/components/ProductDetails/ImageGrid.jsx";
import Content from "@/modules/Product/components/ProductDetails/Content.jsx";
import Layout from "@/components/layout/Layout.jsx";
import { BreadCrumbComp } from "@/modules/Product/components/ProductDetails/BreadCrumb.jsx";
import { GoArrowRight } from "react-icons/go";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import SingleProductCard from "@/modules/Product/components/ProductCard/SingleProductCard.jsx";
import NewsletterSignup from "@/components/NewsLetterSignUp.jsx";
import ContentWrapper from "@/components/ContentWrapper.jsx";
import Footer from "@/components/layout/Footer.jsx";

const ProductDetails = () => {
  return (
    <>
      <ContentWrapper className="!max-w-[1200px] px-4">
        <Layout className="font-inter">
          <BreadCrumbComp currentRoute="Living Room" />
          <div className="flex gap-8">
            <ImageGrid images={Array.from({ length: 6 })} />
            <Content />
          </div>
          <div className="flex justify-between my-8 font-poppins">
            <h2 className="text-[28px] font-semibold">You Might Also Like</h2>
            <a className="flex gap-2 items-center font-medium border-b border-[#222]">
              More Products
              <GoArrowRight />
            </a>
          </div>
          <div className="flex">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 22 }).map((_, idx) => (
                  <CarouselItem key={idx} className="basis-1/5">
                    <SingleProductCard
                      isNew={true}
                      discount={50}
                      title="Table Lamp"
                      price={24.99}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Layout>
      </ContentWrapper>
      <NewsletterSignup className="mt-12 m-auto" />
      <Footer />
    </>
  );
};

export default ProductDetails;
