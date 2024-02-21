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
              <label>Dato: <input type="text" id="1" /></label>
              <label>Dato: <input type="text" id="2" /></label>
              <label>Dato: <input type="text" id="3" /></label>
              <label>Dato: <input type="text" id="4" /></label>
              <label>Dato: <input type="text" id="5" /></label>
              <label>Dato: <input type="text" id="6" /></label>
              <label>Dato: <input type="text" id="7" /></label>
            </fieldset>
          </form>
      </div>
  </>
    )
}
export default ReqCard;