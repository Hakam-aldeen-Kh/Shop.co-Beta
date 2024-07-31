const useCalcPrice = (price: number, discount: number) => {
  const finalPrice = price - (discount * price) / 100;
  return finalPrice;
};

export default useCalcPrice;
