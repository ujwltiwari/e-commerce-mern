import ShopBanner from "@/modules/Shop/components/ShopBanner.jsx";
import Layout from "@/components/layout/Layout.jsx";
import Filter from "@/modules/Shop/components/filters/Filter.jsx";
import { categoriesFilters, priceFilters } from "@/constants/shopFilters.js";
import Products from "@/modules/Shop/components/Products.jsx";
import ContentWrapper from "@/components/ContentWrapper.jsx";
import Footer from "@/components/layout/Footer.jsx";

const ShopHome = () => {
  return (
    <>
      <ContentWrapper className="!max-w-[1280px] px-4">
        <Layout />
        <ShopBanner />
        {/*Filter Section*/}
        <div className="my-8 flex gap-8 items-center">
          <Filter title="Categories" items={categoriesFilters} />
          <Filter title="Price" items={priceFilters} selectLabel="All Price" />
        </div>
        {/*Filter Section*/}

        {/*Product Catalogue Section*/}
        <Products products={Array.from({ length: 24 })} />
        {/*Product Catalogue Section*/}
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default ShopHome;
