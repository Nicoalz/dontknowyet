import Header from "./Header";
// import Footer from './footer'

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <p className="font-black text-3xl mx-auto w-fit mb-6 text-custom-red">STARKSIGHT</p>
      <main className="container mx-auto">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
