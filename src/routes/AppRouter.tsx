import { Route, Routes } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import { Home, Category, ProductDetails, Cart } from "@pages/index";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/shop"
        element={
          <MainLayout>
            <Category />
          </MainLayout>
        }
      />
      <Route
        path="/shop/product/:productId"
        element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <Cart />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRouter;
