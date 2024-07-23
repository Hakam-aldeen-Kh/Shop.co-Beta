import ContentLoader from "react-content-loader";
function CategoryMenuSkeleton() {
  const renderSkeleton = Array(6)
  .fill(0)
  .map((_, idx) => (
    <ContentLoader 
    speed={2}
    width={175}
    height={30}
    viewBox="0 0 175 30"
    backgroundColor="#ededed"
    foregroundColor="#fcfcfc"
    key={idx}
  >
    <rect x="2" y="278" rx="3" ry="3" width="206" height="15" /> 
    <rect x="6" y="379" rx="6" ry="6" width="50" height="20" /> 
    <rect x="4" y="305" rx="3" ry="3" width="206" height="15" /> 
    <rect x="59" y="380" rx="6" ry="6" width="150" height="20" /> 
    <rect x="6" y="343" rx="6" ry="6" width="150" height="20" /> 
    <rect x="49" y="201" rx="5" ry="5" width="250" height="9" /> 
    <rect x="18" y="7" rx="5" ry="5" width="142" height="10" />
  </ContentLoader>
  ));
return <>{renderSkeleton}</>;
}

export default CategoryMenuSkeleton
