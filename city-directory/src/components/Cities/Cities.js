import React from "react";
import './Cities.css';
import {Link} from "react-router-dom";
import store from '../../store/store';

export default class Cities extends React.Component {
  state = {
    cities: "",
    countOfCities: "",
    count: 0,
    city: "",
  };

  getCountOfCities = (offset) => {
    let link = `http://localhost:4000/countofcities?count=4&offset=${offset}`;
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countOfCities: data.data });
      })
      .catch((err) => console.log(err));
  };

  getAllCities = () => {
    let link = `http://localhost:4000/cities`;
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cities: data });

        store.dispatch({
          type: "SEND_ALL_CITIES",
          payload: { cities: this.state.cities },
        });
      })
      .catch((err) => console.log(err));
  };

  pageFlipFirst = () => {
    this.getCountOfCities(0);
  };

  pageFlipNext = () => {
    this.state.count += 4;
    this.getCountOfCities(this.state.count);
  };

  pageFlipEnd = () => {
    this.getCountOfCities(this.state.cities.length - 4);
  };

  componentDidMount() {
    this.getAllCities();
    this.getCountOfCities(0);

    const state = store.getState();
    this.setState({ city: state.cityToFind });

    store.subscribe(() => {
      const state = store.getState();
      if (state.countOfCities != "") {
        this.setState({
          city: state.cityToFind,
          countOfCities: state.countOfCities,
        });
      }
    });
  }

  addToCompare = (e) => {
    let link = `http://localhost:4000/cities/${e.target.id}`;
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch({
          type: "ADD_CITY_TO_COMPARE",
          payload: {
            city: data,
          },
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <p className="count-of-cities-on-page">
          Городов на странице: {this.state.countOfCities.length}
        </p>
        <br></br>
        {this.state.countOfCities ? (
          <ul className="cities-box">
            {this.state.countOfCities.map((city) => (
              <li className="city-box" key={city.name}>
                <div className="image-box">
                  <img
                    className="city-image"
                    src={city.image}
                    alt="city image"
                  ></img>
                </div>
                <div className="city-info">
                  <div>
                    <h3 className="city-title">{city.name}</h3>
                    <p className="city-description">{city.description}</p>
                    <Link to={`/cities/${city.id}`} className="city-link">
                      Подробнее
                    </Link>
                  </div>
                  <button
                    className="compare-button"
                    id={city.id}
                    onClick={this.addToCompare}
                  >
                    Добавить в сравнение
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Грузим города, подождите пожалуйста!</h2>
        )}
        <button className="page-flip-button" onClick={this.pageFlipFirst}>
          В начало
        </button>
        <button className="page-flip-button" onClick={this.pageFlipNext}>
          Дальше
        </button>
        <button className="page-flip-button" onClick={this.pageFlipEnd}>
          В конец
        </button>
      </>
    );
  }
}