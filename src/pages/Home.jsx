import React from "react";
import ClientCard from "../components/ClientCard";
import Anchor from "../components/Anchor";

const Home = ()=>{
    return (
        <div className="componentcontainer">
            <ClientCard></ClientCard>
            <Anchor href={"/addacc"} content={"New account"}></Anchor>
        </div>
    )
}

export default Home;