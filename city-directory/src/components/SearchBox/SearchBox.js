import React from "react";
import './SearchBox.css';

export default class SearchBox extends React.Component {
   render() {
      return (
            <div className='box-finder'>
               <div>
                  <form>
                     <input className='search-input' placeholder="Введите город"></input>
                     <button className='finder-button'>
                        <div className='button-img-box'>
                           <img className='img-finder-button' src='https://cdn-icons.flaticon.com/png/512/2207/premium/2207590.png?token=exp=1646574483~hmac=1fd6003466b81885e37a59f00d47bc48'></img>
                           Искать
                        </div>
                     </button>
                  </form>
                  <details>
                     <summary>Фильтр</summary>
                     <div className='filter-box'>
                        <label className='filter-label'>Средние зарплаты:
                           <div className='filter-input-box'>
                              <input className='filter-input' placeholder="₽ min"></input>
                              <input className='filter-input' placeholder="₽ max"></input>
                           </div>
                        </label>
                        <hr></hr>
                        <label className='filter-label'>Население:
                           <div className='filter-input-box'>
                              <input className='filter-input' placeholder="min"></input>
                              <input className='filter-input' placeholder="max"></input>
                           </div>
                        </label>
                        <hr></hr>
                        <label className='filter-label'>Стоимость м² в центре:
                           <div className='filter-input-box'>
                              <input className='filter-input' placeholder="₽ min"></input>
                              <input className='filter-input' placeholder="₽ max"></input>
                           </div>
                        </label>
                        <hr></hr>
                        <label className='filter-label'>Уровень безработицы:
                           <div className='filter-input-box'>
                              <input className='filter-input' placeholder="% min"></input>
                              <input className='filter-input' placeholder="% max"></input>
                           </div>
                        </label>
                     </div>
                  </details>
               </div>
               <div className="count-of-cities">
                  <label>Количество городов на странице:
                     <input className='input_count-of-cities' type='number' min="1"></input>
                  </label>
               </div>
            </div>
      )
   }
}