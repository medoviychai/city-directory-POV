import React from "react";
import "./ComparePage.css";
import store from "../../store/store";

export default class ComparePage extends React.Component {
  state = {
    cityToCompare: "",
  };

  removeCity = (id) => {
    const clone = this.state.cityToCompare;
    let elem = clone.splice(id, 1);
    clone.filter((city) => {
      return city != elem;
    });
    this.setState({ cityToCompare: clone });
  };

  componentDidMount() {
    const state = store.getState();
    this.setState({ cityToCompare: state.cityToCompare });

    store.subscribe(() => {
      const state = store.getState();
      this.setState({ cityToCompare: state.cityToCompare });
    });
  }

  render() {
    return (
      <div className="compare-wrap">
        {this.state.cityToCompare != "" ? (
          <ul>
            <div className="indicator-wrap">
              <h4 className="title-indicator titles-compare">Критерий</h4>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/working-parents.png"
                ></img>
                <p>Население</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/receive-cash--v4.png"
                ></img>
                <p>Средние зарплаты</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/snowflake--v2.png"
                ></img>
                <p>Средняя ℃ зимой</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/sun--v1.png"
                ></img>
                <p>Средняя ℃ летом</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/house.png"
                ></img>
                <p>Стоимость м²</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/petrol--v2.png"
                ></img>
                <p>Цена на бензин (АИ-95)</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/briefcase--v1.png"
                ></img>
                <p>Уровень безработицы</p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/bus-next-sop--v2.png"
                ></img>
                <p>
                  Билет на <abbr title="общественный транспорт">автобус</abbr>
                </p>
              </div>
              <div className="indicator">
                <img
                  className="icon-compare"
                  src="https://img.icons8.com/pastel-glyph/64/000000/leaderboard.png"
                ></img>
                <p>
                  Позиция в{" "}
                  <abbr title="Лучший город для жизни по версии Государственной корпорации развития ВЭБ.РФ">
                    рейтинге
                  </abbr>
                </p>
              </div>
            </div>
            {this.state.cityToCompare.map((city, id) => (
              <li className="list-about-city">
                <h4 className="titles-compare">
                  {city.name}
                  <button
                    className="remove-compare-city"
                    onClick={() => this.removeCity(id)}
                  >
                    ✖
                  </button>
                </h4>
                <p>{city.population} человек</p>
                <p>{city.average_salary} рублей</p>
                <p>{city.air_temperature_winter} ℃</p>
                <p>{city.air_temperature_summer} ℃</p>
                <p>{city.ap_price_meter} рублей</p>
                <p>{city.fuel_cost} рублей</p>
                <p>{city.unemployment_rate} %</p>
                <p>{city.bus_ticket} рублей</p>
                <p>{city.top_position}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="no-compare-title">Ой, вы еще ничего не добавили</h2>
        )}
      </div>
    );
  }
}
