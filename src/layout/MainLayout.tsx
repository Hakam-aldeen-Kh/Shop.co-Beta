import { ReactNode } from "react";
import { Footer, Header } from "@components/index";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
