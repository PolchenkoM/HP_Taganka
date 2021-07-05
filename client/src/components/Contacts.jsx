import React from "react";

function Contacts() {
  return (
    <>
      <div style={{ fontSize: 40, position: "relative", bottom: 150 }}>
        Контакты
      </div>
      <div
        style={{
          fontSize: 20,
          borderRadius: "7px",
          position: "relative",
          boxShadow: "0 0 40px black",
          width: 600,
          left: 250,
          bottom: 50,
          backgroundColor: "white",
          opacity: 0.5,
        }}
      >
        <p>Aдрес:</p>
        <p>Москва, Таганская ул., 24 стр 4</p>
        <p> Метро:</p>
        <p>Таганская/Марксистская</p>
        <p>Телефон для брони:</p>
        <p>8(985)775-68-83</p>
      </div>

      <div style={{ fontSize: 40, position: "relative", bottom: 20 }}>
        Как добраться
      </div>
      <div style={{ fontSize: 40, position: "relative", top: 20 }}>
        <img
          src="./images/card.png"
          alt=""
          style={{
            height: "500px",
            borderRadius: "7px",
            boxShadow: "0 0 20px black",
          }}
        />
      </div>
    </>
  );
}

export default Contacts;
