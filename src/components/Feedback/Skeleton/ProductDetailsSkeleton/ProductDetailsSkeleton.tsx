import ContentLoader from "react-content-loader";

function ProductDetailsSkeleton() {
  return (
    <div className="mt-[120px]">
      {/* Skeleton for Breadcrumbs */}
      <ContentLoader
        speed={2}
        width="100%"
        height={40}
        backgroundColor="#ededed"
        foregroundColor="#fcfcfc"
        className="mb-4"
      >
        <rect x="0" y="0" rx="4" ry="4" width="300" height="20" />
      </ContentLoader>
      {/* Skeleton for Product Details */}
      <div className="container flex items-start flex-wrap md:justify-between">
        <div className="w-full md:max-w-[50%] flex flex-wrap lg:flex-nowrap flex-row-reverse">
          <ContentLoader
            speed={2}
            width="100%"
            height={400}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
          >
            <rect x="0" y="0" rx="10" ry="10" width="100%" height="400" />
          </ContentLoader>
          <div className="lg:mr-5 w-full lg:w-[30%] h-full flex items-center justify-between mt-3 lg:mt-0 lg:flex-col gap-x-3">
            {[...Array(3)].map((_, index) => (
              <ContentLoader
                key={index}
                speed={2}
                width="100%"
                height={150}
                backgroundColor="#ededed"
                foregroundColor="#fcfcfc"
                className="mb-4"
              >
                <rect x="0" y="0" rx="10" ry="10" width="100%" height="150" />
              </ContentLoader>
            ))}
          </div>
        </div>
        <div className="mt-3 md:pl-8 md:mt-0 w-full md:max-w-[50%] font-[ubuntu]">
          <ContentLoader
            speed={2}
            width="100%"
            height={50}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
          >
            <rect x="0" y="0" rx="4" ry="4" width="80%" height="30" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width="100%"
            height={30}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
            className="my-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="50%" height="20" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width="100%"
            height={40}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
            className="mb-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="30%" height="30" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width="100%"
            height={50}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="30" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width="100%"
            height={60}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
            className="my-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="40" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width="100%"
            height={30}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
            className="mb-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="50%" height="20" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width="100%"
            height={50}
            backgroundColor="#ededed"
            foregroundColor="#fcfcfc"
            className="mb-4"
          >
            <rect x="0" y="0" rx="4" ry="4" width="35%" height="30" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSkeleton;
