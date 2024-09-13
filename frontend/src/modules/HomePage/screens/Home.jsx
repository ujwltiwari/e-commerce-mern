import Banner from "@/assets/images/sofa.png";
import CarouselComponent from "@/components/CarouselComponent.jsx";
import BannerGrid from "@/modules/HomePage/components/BannerGrid.jsx";
const Home = () => {
  return (
    <>
      <CarouselComponent images={[Banner, Banner]} />
      <div className="flex gap-20 justify-between my-4">
        <h2 className="text-[60px] font-medium tracking-tight">
          Simply Unique/ Simply Better.
        </h2>
        <p className="text-[16px] mt-[24px]">
          <strong>3legant</strong> is a gift & decorations store based in HCMC,
          Vietnam. Est since 2019.
        </p>
      </div>
      <BannerGrid />
    </>
  );
};

export default Home;
