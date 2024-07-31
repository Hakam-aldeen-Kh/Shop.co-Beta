import Product from "@components/common/Product/Product";
import { useCalcPrice } from "@hooks/index";
import useCategory from "@hooks/useCategory";
function Products() {
  const { allProducts } = useCategory();
  return (
    <div className="grid grid-cols-3 gap-6 w-[80%] pl-6">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} calcPrice={useCalcPrice} />
      ))}
    </div>
  );
}

export default Products;
