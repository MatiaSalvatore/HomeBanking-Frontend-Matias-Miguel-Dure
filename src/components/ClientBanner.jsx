import React, { useEffect, useState } from "react";
import axios from "axios";

const WelcomeBanner = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/1")
            .then(response => {
                const clientData = response.data;
                setName(clientData.firstName);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });
    }, []);

    return (
        <>    
            <p className="welcome">Welcome, {name}!</p>
        </>    
    );
};

export default WelcomeBanner;