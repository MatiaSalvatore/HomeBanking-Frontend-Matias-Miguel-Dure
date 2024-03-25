import React from "react";
import ClientDBCards from "../components/ClientDBCards";
import Anchor from "../components/Anchor";

const Cards = ()=>{
    const user = useSelector((store)=>store.auth.user)
    return (
        <div className="componentcontainer">
            <ClientDBCards></ClientDBCards>
            <Anchor href={"/addcard"} content={"New card"}></Anchor>
        </div>
    )
}

export default Cards;