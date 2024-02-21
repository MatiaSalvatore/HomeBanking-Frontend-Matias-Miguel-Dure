import React from "react";
import ClientDBCards from "../components/ClientDBCards";
import Anchor from "../components/Anchor";

const Cards = ()=>{
    return (
        <div className="componentcontainer">
            <ClientDBCards></ClientDBCards>
            <Anchor href={"/addcard"} content={"New card"}></Anchor>
        </div>
    )
}

export default Cards;