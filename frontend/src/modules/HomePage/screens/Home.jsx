import Banner from "@/assets/images/sofa.png";
import CarouselComponent from "@/components/CarouselComponent.jsx";
import BannerGrid from "@/modules/HomePage/components/BannerGrid.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import FooterInfoContainer from "@/modules/HomePage/components/FooterInfo/FooterInfoContainer.jsx";
import FooterBanner from "@/modules/HomePage/components/FooterBanner.jsx";
import SingleProductCard from "@/modules/Product/components/ProductCard/SingleProductCard.jsx";
import ContentWrapper from "@/components/ContentWrapper.jsx";
import Layout from "@/components/layout/Layout.jsx";
import NewsletterSignup from "@/components/NewsLetterSignUp.jsx";
import Footer from "@/components/layout/Footer.jsx";
const Home = () => {
  return (
    <>
      <ContentWrapper className="!max-w-[1280px]">
        <Layout />
        <CarouselComponent images={[Banner, Banner]} />
        <div className="flex gap-20 justify-between my-4">
          <h2 className="text-[60px] font-medium tracking-tight">
            Simply Unique/ Simply Better.
          </h2>
          <p className="text-[16px] mt-[24px]">
            <strong>3legant</strong> is a gift & decorations store based in
            HCMC, Vietnam. Est since 2019.
          </p>
        </div>
        <BannerGrid />
        <h1 className="text-[40px] font-medium text-left w-[50px]">
          New Arrivals
        </h1>
        <div className="flex py-20 pt-10">
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

        <FooterInfoContainer />
        <FooterBanner />
      </ContentWrapper>
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Home;
