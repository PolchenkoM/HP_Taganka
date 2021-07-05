import React from "react";
import { Popover, Button } from "antd";

const tabacko = (
  <div>
    <p>Duft</p>
    <p>Северный</p>
    <p>Tangiers</p>
    <p>Nakhla</p>
    <p>Al Fakher</p>
    <p>Afzal</p>
    <p>Fumari</p>
    <p>Argelini</p>
    <p>Must Have</p>
    <p>Dark Side</p>
    <p>Adalya</p>
    <p>WTO</p>
    <p>Spectrum</p>
    <p>Daily Hookah</p>
  </div>
);

const hookah = (
  <div>
    <p>Wookah</p>
    <p>Mattpear</p>
    <p>Mamay Custom</p>
    <p>Dark Side</p>
    <p>Nube</p>
    <p>VZ</p>
    <p>Union</p>
  </div>
);
const kitchen = (
  <div>
    <p>Чаи</p>
    <p>Лимонады</p>
    <p>Мороженое</p>
    <p>Снеки</p>
    <p>Сендвичи</p>
    <p>Шоколадки</p>
    <p>Газировки</p>
    <p>Пиво</p>
  </div>
);

function Info() {
  const buttonStyle = {
    width: "100px",
    height: "45px",
    borderRadius: "7px",
    boxShadow: "0 0 20px white",
  };

  return (
    <>
      <div style={{ fontSize: 40, position: "relative", bottom: 150 }}>
        О заведении
      </div>
      <div
        style={{
          backgroundColor: "white",
            opacity: 0.5,
          fontSize: 25,
          borderRadius: "7px",
          boxShadow: "0 0 40px black",
          width: 600,
          position: "relative",
          left: 250,
          bottom: 100,
        }}
      >
        Уютная и атмосферная кальянная в стиле Loft. Большой выбор табака и
        прохладительных напитков, много разнообразных сортов чая и вкусный кофе,
        а также сэндвичи и сладкие закуски. Много настольных игр и 2 игровые
        зоны с PS4.
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
        <p>График работы:</p>
        <p>ВС-ЧТ с 12:00 до 02:00</p>
        <p> ПТ-СБ с 12:00 до 04:00</p>
        <p>Стоимость кальяна от 1000 ₽</p>
        <p>Стоимость чая от 300 ₽</p>
      </div>
      <div
        style={{
          width: 800,
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          top: "50px",
          left: 150,
        }}
      >
        <Popover content={tabacko} trigger="hover">
          <Button style={buttonStyle} type="danger">
            Табаки
          </Button>
        </Popover>
        <Popover content={hookah} trigger="hover">
          <Button style={buttonStyle} type="danger">
            Кальяны
          </Button>
        </Popover>
        <Popover content={kitchen} trigger="hover">
          <Button style={buttonStyle} type="danger">
            Кухня
          </Button>
        </Popover>
      </div>
    </>
  );
}

export default Info;
