import React, { useEffect, useState } from "react";
import axios from "axios";
import chip from "../assets/cardchip.png";

const ClientDBCards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("/api/clients/current")
            .then(response => {
                const clientData = response.data;
                setCards(clientData.cards);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <>
            <div className="cdcardscontainer">
            {cards.map(card => (
                <div key={card.id} className="cdcardcontainer">
                    <div className="cardtop">
                        <img className="chip" src={chip} alt="chip"/>
                        <div className="type">
                            <p>{card.type} CARD</p>
                        </div>
                    </div>
                    <p className="cardnumber">{card.number}</p>
                    <p className="cardtitle">{card.cardHolder}</p>
                    <div className="datasection">
                        <p>Valid thru:{card.thruDate}</p>               
                        <p>CVV: {card.cvv}</p>
                        <p>{card.color}</p>
                        
                    </div>
                </div>
            ))}
        </div>
        </>
    )

}

export default ClientDBCards;