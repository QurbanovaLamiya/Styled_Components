import { Fragment } from "react";
import GlobalStyle from "../style/Global.styled";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Pages = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default Pages;
