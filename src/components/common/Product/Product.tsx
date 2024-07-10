import { Rating } from "@material-tailwind/react";
import { TProduct } from "@types";

interface ProductItemProps {
  product: TProduct;
  calcPrice: (price: number, discount: number) => number;
}

function Product({ product, calcPrice }: ProductItemProps) {
  const coverUrl = product.attributes.cover.data.attributes.url;

  return (
    <div key={product.id} className="product-item min-w-[200px]">
      <img
        src={`http://localhost:1337${coverUrl}`}
        alt={product.attributes.title}
        className="w-full h-[200px] lg:h-[300px] object-cover rounded-[15px]"
      />
      <h3 className="font-semibold font-[ubuntu] pl-2 my-2">
        {product.attributes.title}
      </h3>
      <div className="flex text-sm font-semibold items-center">
        <Rating value={product.attributes.rating} readonly />
        <span className="mx-2">{product.attributes.rating} / 5 </span>
      </div>
      <p className="font-semibold text-[18px] pl-2 mt-2">
        $
        {product.attributes.discount != null
          ? calcPrice(product.attributes.price, product.attributes.discount)
          : product.attributes.price}
        {product.attributes.discount && (
          <span className="inline-block mx-3">
            <span className="text-gray-500 line-through mx-1">
              ${product.attributes.price}
            </span>{" "}
            <span className="text-sm rounded-full px-2 py-1 text-red-500 bg-red-100">
              -{product.attributes.discount}%
            </span>
          </span>
        )}
      </p>
    </div>
  );
}

export default Product;
