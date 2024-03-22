import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = (props) => {

    return (
    <>
        <div class="Maincointainer">
        <Header></Header>
            {props.children}
        </div>
    </>
    )
}
export default MainLayout;