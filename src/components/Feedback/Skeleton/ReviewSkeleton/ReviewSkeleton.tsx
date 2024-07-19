import ContentLoader from "react-content-loader";

function ReviewSkeleton() {
  const renderSkeleton = Array(4)
    .fill(0)
    .map((_, idx) => (
      <ContentLoader
        key={idx}
        speed={2}
        width={370}
        height={250}
        viewBox="0 0 370 250"
        backgroundColor="#ededed"
        foregroundColor="#fcfcfc"
        className="min-w-[400px] mx-auto absolute md:relative left-[50px] md:left-0"
      >
        <rect x="2" y="278" rx="3" ry="3" width="206" height="15" />
        <rect x="6" y="379" rx="6" ry="6" width="50" height="20" />
        <rect x="4" y="305" rx="3" ry="3" width="206" height="15" />
        <rect x="59" y="380" rx="6" ry="6" width="150" height="20" />
        <rect x="6" y="343" rx="6" ry="6" width="150" height="20" />
        <circle cx="85" cy="71" r="11" />
        <circle cx="112" cy="71" r="11" />
        <circle cx="139" cy="71" r="11" />
        <circle cx="165" cy="71" r="11" />
        <circle cx="59" cy="71" r="11" />
        <rect x="48" y="95" rx="5" ry="5" width="193" height="19" />
        <rect x="49" y="201" rx="5" ry="5" width="250" height="9" />
        <rect x="48" y="161" rx="5" ry="5" width="250" height="9" />
        <rect x="48" y="180" rx="5" ry="5" width="250" height="9" />
        <rect x="48" y="141" rx="5" ry="5" width="250" height="9" />
      </ContentLoader>
    ));
  return <>{renderSkeleton}</>;
}

export default ReviewSkeleton;
