import { TProduct } from "./products.types";
import { TLoading } from "./loading.types";
export type TCategoryController = {
  loading: TLoading;
  error: string | null;
  allProducts: TProduct[];
  start: number;
  end: number;
  itemsPerPage: number;
  isFilterOpen: boolean;
  next: () => void;
  prev: () => void;
  handlePageClick: (page: number) => void;
  setIsFilterOpen: (isOpen: boolean) => void;
  toggleFilter: () => void;
};
