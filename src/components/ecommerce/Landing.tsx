import {
  BackgroundSection,
  BrandsSection,
  DisplayProducts,
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
      {/* //* Top Selling */}
      <DisplayProducts status="Top Selling" title="Top Selling" />
    </>
  );
}

export default Landing;
