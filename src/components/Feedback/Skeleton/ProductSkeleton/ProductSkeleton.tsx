import ContentLoader from "react-content-loader";

function ProductSkeleton({ number }: { number: number }) {
  const renderSkeleton = Array(number)
    .fill(0)
    .map((_, idx) => (
      <ContentLoader
        key={idx}
        speed={2}
        width={210}
        height={425}
        viewBox="0 0 210 425"
        backgroundColor="#ededed"
        foregroundColor="#fcfcfc"
        className="product-item min-w-[300px] mx-auto"
      >
        <rect x="4" y="196" rx="3" ry="3" width="111" height="10" />
        <rect x="5" y="215" rx="3" ry="3" width="111" height="10" />
        <rect x="2" y="278" rx="3" ry="3" width="206" height="15" />
        <rect x="6" y="379" rx="6" ry="6" width="50" height="20" />
        <rect x="1" y="7" rx="14" ry="14" width="206" height="250" />
        <rect x="4" y="305" rx="3" ry="3" width="206" height="15" />
        <rect x="59" y="380" rx="6" ry="6" width="150" height="20" />
        <rect x="6" y="343" rx="6" ry="6" width="150" height="20" />
      </ContentLoader>
    ));
  return <>{renderSkeleton}</>;
}

export default ProductSkeleton;
