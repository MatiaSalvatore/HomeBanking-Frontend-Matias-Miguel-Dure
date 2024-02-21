import React from "react";
import Anchor from "../components/Anchor";

const ReqLoan = () => {
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
        <h3>Add a new loan</h3>
        <form action="" method="post" className="Form">
          <fieldset className="Formfield">
            <label>Reason for Loan: <input type="text" id="1" /></label>
            <label>Account of origin: <input type="text" id="2" /></label>
            <label>Amount: $<input type="number" id="3" /></label>
            <label>Payments: <select className="selectCard" name="ej" id="ej">
              <option value="pay1">3</option>
              <option value="pay2">6</option>
              <option value="pay3">12</option>
              <option value="pay4">24</option>
            </select></label>
            <Anchor href="/loans" content="Submit"></Anchor>
          </fieldset>
        </form>
    </div>
</>
   )

}

export default ReqLoan;