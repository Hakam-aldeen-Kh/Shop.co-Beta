import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actFilterProducts } from "@store/products/productsSlice";

const useProductDetails = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId: string }>();
  const [count, setCount] = useState(1);
  const [isStockZero, setIsStockZero] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const product = useAppSelector((state) =>
    state.products.records.find(
      (product) => product.id == parseInt(productId as string)
    )
  );

  const sameProduct = useAppSelector((state) => state.products.sameProduct);
  const { loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actFilterProducts({ productId }));
    return () => {
      setCount(1);
    };
  }, [productId, dispatch]);

  useEffect(() => {
    if (product && product.attributes.stock - count === 0) {
      setIsStockZero(true);
      setTimeout(() => setIsStockZero(false), 300); // Reset after animation
    }
  }, [count, product]);

  useEffect(() => {
    if (product && product.attributes.cover?.data?.attributes?.url) {
      setActiveImage(product.attributes.cover.data.attributes.url);
    }
  }, [product]);

  useEffect(() => {
    dispatch(
      actFilterProducts({
        category: product?.attributes.category.data?.attributes.title,
      })
    );
  }, [dispatch, product?.attributes.category.data?.attributes.title]);

  const increment = () => {
    if (product && count < product.attributes.stock) {
      setCount(count + 1);
    } else if (product && product.attributes.stock - count === 0) {
      setIsStockZero(true);
      setTimeout(() => setIsStockZero(false), 600); // Trigger animation
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleImageClick = (url: string) => {
    setActiveImage(url);
  };

  return {
    product,
    sameProduct,
    loading,
    count,
    isStockZero,
    activeImage,
    increment,
    decrement,
    handleImageClick,
  };
};

export default useProductDetails;
