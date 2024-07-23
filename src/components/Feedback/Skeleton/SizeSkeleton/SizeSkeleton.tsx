import ContentLoader from "react-content-loader";

function SizeSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={60}
      viewBox="0 0 400 60"
      backgroundColor="#ededed"
      foregroundColor="#fcfcfc"
      className="w-full h-full"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={10 + i * 70} y={15} rx={10} ry={10} width={50} height={30} />
      ))}
    </ContentLoader>
  );
}

export default SizeSkeleton;
