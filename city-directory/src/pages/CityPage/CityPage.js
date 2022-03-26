import React, { useEffect } from "react";
import "./CityPage.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function CityPage() {
  const [city, setCity] = useState("");

  const location = useLocation();
  let id = location.pathname.replace(/[^0-9]/g, "");

  useEffect(() => {
    const link = `http://localhost:4000/cities/${id}`;
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setCity(data[0]);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="box-of-city">
      <div className="wrap">
        <img className="main-image" src={city.image}></img>
        <div className="main-box">
          <div className="title-wrap">
            <h2 className="main-title">{city.name}</h2>
            <img className="main-logo" src={city.logo}></img>
          </div>
          <p className="main-description">{city.description}</p>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <th>Критерий</th>
          <th>Значение</th>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/working-parents.png"
              ></img>
              Население
            </td>
            <td>{city.population} человек</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/receive-cash--v4.png"
              />
              Средние зарплаты
            </td>
            <td>{city.average_salary} рублей</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/snowflake--v2.png"
              />{" "}
              Средняя ℃ зимой
            </td>
            <td>{city.air_temperature_winter} ℃</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/sun--v1.png"
              />{" "}
              Средняя ℃ летом
            </td>
            <td>{city.air_temperature_summer} ℃</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/house.png"
              />{" "}
              Стоимость м²
            </td>
            <td>{city.ap_price_meter} рублей</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/petrol--v2.png"
              />{" "}
              Цена на бензин (АИ-95)
            </td>
            <td>{city.fuel_cost} рублей</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/briefcase--v1.png"
              />{" "}
              Уровень безработицы
            </td>
            <td>{city.unemployment_rate} %</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/bus-next-sop--v2.png"
              />{" "}
              Цена билета на <br></br>общественном транспорте
            </td>
            <td>{city.bus_ticket} рублей</td>
          </tr>
          <tr>
            <td>
              <img
                className="icon"
                src="https://img.icons8.com/pastel-glyph/64/000000/leaderboard.png"
              />{" "}
              Позиция в{" "}
              <abbr title="Лучший город для жизни по версии Государственной корпорации развития ВЭБ.РФ">
                рейтинге
              </abbr>{" "}
              <br></br> городов по уровню жизни
            </td>
            <td>{city.top_position}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
