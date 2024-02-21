import React from "react";
import Anchor from "../components/Anchor";


const ReqCard = () => {

     /* 
        post
          axios.post("http://localhost:8080/api/cards")
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
          <h3>Add a new card</h3>
          <form action="" method="post" className="Form">
            <fieldset className="Formfield">
            <p>Select card type</p>
            <select className="selectCard" name="ejemplo" id="ejemplo">
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
            <p>Select card membership (color)</p>
            <select className="selectCard" name="ej" id="ej">
              <option value="titanium">Titanium</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
            <Anchor href="/cards" content="Submit"></Anchor>
            </fieldset>
          </form>
      </div>
  </>
    )
}
export default ReqCard;