import { Route, Routes } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import Home from "@pages/Home";
import Category from "@pages/Category";

Route;
function AppRouter() {
  return (
    <Routes>
      {/* <Route path="*" element={}/> */}
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
    </Routes>
  );
}

export default AppRouter;
