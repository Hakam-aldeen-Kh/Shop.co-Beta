export type TReview = {
  id: number;
  attributes: {
    name: string;
    review: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    rating: number;
  };
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
