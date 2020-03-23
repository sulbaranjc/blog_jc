import React from "react";

const App = () => {
  const ponerFilas = () => [
    <tr>
      <td>Juan Carlos</td>
      <td>sulbaranjc@gmail.com</td>
      <td>sulbaranjc.webside</td>
    </tr>,
    <tr>
      <td>Fernada</td>
      <td>fernanda@platzi.com</td>
      <td>fernanda.com</td>
    </tr>
  ];

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

export default App;
