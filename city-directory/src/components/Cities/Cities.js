import React from "react";
import './Cities.css';
import {Link} from "react-router-dom";

export default class Cities extends React.Component {
   getCities = () => {
      // console.log(filmName)
      let link = `http://localhost:4000/cities`;
      // console.log('link',link);
      fetch(link)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            // this.setState({filmInfo: data})
         })
         .catch((err) => console.log(err))
  }

  componentDidMount() {
   this.getCities();
  }

   render() {
      return(
            <div className='cities-box'>
               <img className='city-image' src="https://clck.ru/dZFRk" alt='city image'></img>
               <div className='city-info'>
                  <h4 className="city-title">Название города</h4>
                  <p className="city-description">Описание города описание города описание города описание города описание города описание города</p>
                  <Link to='/' className='city-link'>Подробнее</Link>
                  <button className='compare-button'>Добавить в сравнение</button>
               </div>
            </div>
      )
   }
}