import { TProduct } from "@types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actFilterProducts } from "@store/products/productsSlice";
import { addToCart } from "@store/cart/cartSlice";

const useProductDetails = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams<{ productId: string }>();
  const [count, setCount] = useState(0);
  const [sizeCheck, setSizeCheck] = useState(false);
  const [isStockZero, setIsStockZero] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);

  const product: TProduct | undefined = useAppSelector((state) =>
    state.products.records.find(
      (product) => product.id == parseInt(productId as string)
    )
  );

  const sameProduct = useAppSelector((state) => state.products.sameProduct);
  const { loading } = useAppSelector((state) => state.products);
  const { cartItems } = useAppSelector((state) => state.cart);

  const inCart = cartItems.find(
    (item) => item.productId === product?.id
  )?.quantity;

  useEffect(() => {
    dispatch(actFilterProducts({ productId }));
    return () => {
      setCount(0);
    };
  }, [productId, dispatch]);

  useEffect(() => {
    if (product && product.attributes.stock - count - (inCart || 0) === 0) {
      setIsStockZero(true);
      setTimeout(() => setIsStockZero(false), 300); // Reset after animation
    }
  }, [count, product, inCart]);

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
    if (product && count + (inCart || 0) < product.attributes.stock) {
      setCount(count + 1);
    } else if (
      product &&
      product.attributes.stock - count - (inCart || 0) === 0
    ) {
      setIsStockZero(true);
      setTimeout(() => setIsStockZero(false), 600); // Trigger animation
    }
  };

  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        productId: product.id,
        quantity: count,
        size: activeSize,
        product: product,
      };
      dispatch(addToCart(cartItem));
      setCount(0);
      setSizeCheck(false);
      setActiveSize(null);
    }
  };

  const handleChoseSize = (sizeTitle: string) => {
    setActiveSize(sizeTitle);
    setSizeCheck(true);
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
    cartItems,
    inCart,
    activeSize,
    sizeCheck,
    increment,
    decrement,
    handleAddToCart,
    handleImageClick,
    handleChoseSize,
  };
};

export default useProductDetails;
