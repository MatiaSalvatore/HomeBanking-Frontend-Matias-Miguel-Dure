import React from "react";
import ClientLoans from "../components/ClientLoans"
import Anchor from "../components/Anchor";

const Loans = ()=>{
    return (
        <div className="componentcontainer">
            <ClientLoans></ClientLoans>
            <Anchor href={"/addloan"} content={"Ask for a new Loan"}></Anchor>
        </div>
    )
}

export default Loans;