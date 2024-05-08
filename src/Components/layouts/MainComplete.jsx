import React from "react";
import AutoToTop from "../AutoToTop";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export default function main(props) {
  return (
    <div className="Home">
      <AutoToTop />
      <Header />
      <div >{props.children}</div>
      <Footer />
    </div>
  );
}
