import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => {

    return (
    <>
        <Header></Header>
            {props.children}
        <Footer></Footer>
    </>
    )
}
export default MainLayout;