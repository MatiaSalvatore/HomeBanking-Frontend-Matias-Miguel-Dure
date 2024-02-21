import React from "react";
import Anchor from "../components/Anchor";

const ReqAccount = () => {


     /* 
        post
          axios.post("http://localhost:8080/api/account")
            .then(response => {
              // La solicitud se completó con éxito, puedes manejar la respuesta aquí
              console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
              // Ocurrió un error al realizar la solicitud, maneja el error aquí
              console.error('Error al realizar la solicitud:', error);
            });
  
  */

    return (
        <>
            <div className="componentcontainer">
                <h3>Add a new account</h3>
                <form action="" method="post" className="Form">
                  <fieldset className="Formfield">
                    <p>By creating an account with Lion Bank, you confirm your eligibility, agree to provide accurate information, and undertake to maintain the security of your account credentials. You commit to complying with all applicable laws and regulations, refrain from engaging in illegal activities, and consent to receive communications from Lion Bank. Lion Bank reserves the right to terminate or suspend accounts for any violation of these terms, and may update them at its discretion. These terms are governed by the laws of [Jurisdiction], and any invalid provision shall not affect the validity of the remaining terms.</p>
                    <Anchor href="/accounts" content="Submit"></Anchor>
                  </fieldset>
                </form>
            </div>
        </>
    )

}

export default ReqAccount;