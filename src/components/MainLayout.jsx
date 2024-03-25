import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carrousel from "./Carrousel";
const MainLayout = (props) => {

    return (
    <>
        <div class="Maincointainer">       
        <Header></Header>
        <div className="mainlayoutgrid">
            <div className="leftpanel">
            {props.children}
            </div>
            <div>
                <Carrousel></Carrousel>
            </div>
            </div>
            
        </div>
    </>
    )
}
export default MainLayout;