export type TColors = {
  id: number;
  attributes: {
    title: string;
    degree: string
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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
