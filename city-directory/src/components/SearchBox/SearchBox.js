import React from "react";
import './SearchBox.css';

export default class SearchBox extends React.Component {
   state = {
      countOfCities: '',
      inputCount: '',
      cities: '',
   }

   handlerSubmitButton = (evt) => {
      evt.preventDefault();
   }

   handleInputChange = (evt) => {
      // console.log(evt.target.value);
      this.setState({inputCount: evt.target.value});

      this.getCountOfCities(evt.target.value);
   }

   getCountOfCities = (count) => {
      let link = `http://localhost:4000/countofcities?count=${count}&offset=0`;
      fetch(link)
         .then((res) => res.json())
         .then((data) => {
            this.setState({countOfCities: data})
            // console.log(this.state.countOfCities);
         })
         .catch((err) => console.log(err))
   }

   getAllCities = () => {
      // console.log(filmName)
      let link = `http://localhost:4000/cities`;
      // console.log('link',link);
      fetch(link)
         .then((res) => res.json())
         .then((data) => {
            // console.log(data);
            this.setState({cities: data})
            // console.log(this.state.cities);
         })
         .catch((err) => console.log(err))
  }

//    findCity = () => {
//       store.dispatch({
//           type: 'FIND_CITY',
//           payload: {cities: this.state.cities}
//       })
//   }

   render() {
      return (
            <div className='box-finder'>
               <div>
                  <form onSubmit={this.handlerSubmitButton}>
                     <input className='search-input' placeholder="Введите город"></input>
                     <button  className='finder-button'>
                        <div className='button-img-box' onClick={this.findCity}>
                           <img className='img-finder-button' src='https://img.icons8.com/pastel-glyph/50/000000/search--v2.png'></img>
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
                     <input className='input_count-of-cities' onChange={this.handleInputChange} value={this.state.inputCount} type='number' min="1"></input>
                  </label>
               </div>
            </div>
      )
   }
}