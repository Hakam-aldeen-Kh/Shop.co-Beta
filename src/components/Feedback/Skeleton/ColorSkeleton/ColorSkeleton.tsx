import ContentLoader from "react-content-loader";

function ColorSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={50}
      viewBox="0 0 200 50"
      backgroundColor="#ededed"
      foregroundColor="#fcfcfc"
      className="w-full h-full"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={20 + i * 40} cy={25} r={15} />
      ))}
    </ContentLoader>
  );
}

export default ColorSkeleton;
