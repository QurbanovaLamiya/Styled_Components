import { Fragment } from "react";
import GlobalStyle from "../style/Global.styled";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

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
