export type TProduct = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    discount: number | null;
    rating: number;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    category: {
      data: {
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      } | null;
    };
    statuses: {
      data: Array<{
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }>;
    };
    sizes: {
      data: Array<{
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }>;
    };
    styles: {
      data: Array<{
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        };
      }>;
    };
    color: {
      data: {
        id: number;
        attributes: {
          title: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          degree: string;
        };
      };
    };
    images: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          createdAt: string;
          updatedAt: string;
        };
      }>;
    };
  };
};
