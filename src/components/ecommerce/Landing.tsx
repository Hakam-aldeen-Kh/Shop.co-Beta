import {
  BackgroundSection,
  BrandsSection,
  DisplayProducts,
  StylesSections,
  ReviewsSection,
} from "@components/sections";

function Landing() {
  return (
    <>
      {/* //* background */}
      <BackgroundSection />
      {/* //* Brand Section */}
      <BrandsSection />
      {/* //* New Arrivals */}
      <DisplayProducts status="New Arrivals" title="New Arrivals" />
      <hr className="bg-gray-300 h-[0.1rem]" />
      {/* //* Top Selling */}
      <DisplayProducts status="Top Selling" title="Top Selling" />
      {/* //* StylesSection */}
      <StylesSections />
      {/* //* ReviewsSection */}
      <ReviewsSection />
    </>
  );
}

export default Landing;
