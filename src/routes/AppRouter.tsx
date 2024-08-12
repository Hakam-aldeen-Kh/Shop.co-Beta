import { Route, Routes } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import Home from "@pages/Home";
import Category from "@pages/Category";
import ProductDetails from "@pages/ProductDetails";

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
        path="/categories"
        element={
          <MainLayout>
            <Category />
          </MainLayout>
        }
      />
      <Route
        path="/categories/product/:productId"
        element={
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRouter;
