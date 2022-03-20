import React from "react";
import './SearchBox.css';
import store from '../../store/store';
import ReactDOM from 'react-dom';

export default class SearchBox extends React.Component {
   state = {
      countOfCities: '',
      inputCount: '',
      cities: '',
      cityToFind: '',
      countOfCities: '',
      minSalary: '',
      minPopulation: '',
      maxPopulation: '',
      // minHousingCost: '',
      maxHousingCost: '',
   }

   handleChangeSalary = (e) => {
      this.setState({minSalary: e.target.value})
      // console.log(this.state.minSalary);
   }

   handleMinPopulationChange = (e) => {
      this.setState({minPopulation: e.target.value})
   }

   handleMaxPopulationChange = (e) => {
      this.setState({maxPopulation: e.target.value})
   }

   handleMinHousingCostChange = (e) => {
      this.setState({minHousingCost: e.target.value})
   }

   handleMaxHousingCostChange = (e) => {
      this.setState({maxHousingCost: e.target.value})
   }

   findFilter = () => {
      store.dispatch({ 
         type: "FILTER", 
         payload: {
            minSalary: this.state.minSalary,
            minPopulation: this.state.minPopulation,
            maxPopulation: this.state.maxPopulation,
            // minHousingCost: this.state.minHousingCost,
            maxHousingCost: this.state.maxHousingCost,
         },
      });
   }

   // getCountOfCitiesFromInput = (count) => {
   //       let link = `http://localhost:4000/countofcities?count=${count}&offset=0`;
   //       fetch(link)
   //          .then((res) => res.json())
   //          .then((data) => {
   //             // console.log('data', data.data.length);
   //             this.setState({countOfCities: data.data.length})
   //             // console.log(data);
   //          })
   //          .catch((err) => console.log(err))
   //       }

   handlerSubmitButton = (evt) => {
      evt.preventDefault();
   }

   handleInputChange = (evt) => {
      this.setState({inputCount: evt.target.value});
      // console.log(ReactDOM.findDOMNode(this.refs.myTestInput).value);
      // console.log( evt.target.value);
      // console.log(this.state.inputCount);
      // this.setState((state) => {
      //    // Важно: используем `state` вместо `this.state` при обновлении.
      //    return {inputCount: evt.target.value}
      //  });
      // this.getCountOfCities(evt.target.value);
      // let inpCount = ReactDOM.findDOMNode(this.refs.myTestInput).value
   }

   componentDidUpdate() {

      // this.handleInputChange()
   }
   inputCountButton = () => {
   // console.log('state', this.state.countOfCities);
      store.dispatch({ 
         type: "CHANGE_COUNT_OF_CITIES_ON_PAGE", 
         payload: {inputCount: this.state.inputCount},
      });
   }
   componentDidMount() {
            // this.getCountOfCitiesFromInput(this.state.inputCount)

      // this.getCountOfCitiesFromInput(this.state.inputCount)


      // store.dispatch({ 
      //    type: "CHANGE_COUNT_OF_CITIES_ON_PAGE", 
      //    payload: {inputCount: this.state.inputCount},
      // });
   }
//    getAllCities = () => {
//       // console.log(filmName)
//       let link = `http://localhost:4000/cities`;
//       // console.log('link',link);
//       fetch(link)
//          .then((res) => res.json())
//          .then((data) => {
//             // console.log(data);
//             this.setState({cities: data})
//          })
//          .catch((err) => console.log(err))
//   }

//    findCity = () => {
//       const state = store.getState();
//       this.setState({city: state.cityToFind});
   
//       store.subscribe(() => {
//        const state = store.getState();
//        this.setState({
//            city: state.cityToFind
//          })
//       });

//          const filter = this.state.cities.filter((city) => {
//          return console.log(city.name.toLowerCase().includes(this.state.cityToFind));
//        });
//       //  this.setState({ cities: filter }); //не сюда, надо перекинуть через хранилище
//   }

  findCity = () => {
      store.dispatch({ 
         type: "FIND_CITY", 
         payload: {cityToFind: this.state.cityToFind},
      });

      // store.subscribe(() => {
      //    const state = store.getState();
      //    this.setState({
      //        city: state.cities
      //    })
      // })  
  }

  handleChange = (evt) => {
      let val = evt.target.value;
      this.setState({cityToFind: val.toLowerCase()});
      console.log(this.state.cityToFind);
  }

  handleInputCountChange = (e) => {
      this.setState({inputCount: e.target.value})
  }



   render() {
      return (
            <div className='box-finder'>
               <div>
                  <form className='find-form' onSubmit={this.handlerSubmitButton}>
                     <input className='search-input' value={this.state.cityToFind} onChange={this.handleChange} placeholder="Введите город"></input>
                     <button onClick={this.findCity} className='finder-button'>
                        <div className='button-img-box' onClick={this.findCity}>
                           <img className='img-finder-button' src='https://img.icons8.com/pastel-glyph/50/000000/search--v2.png'></img>
                           Искать
                        </div>
                     </button>
                  </form>
                  <details>
                     <summary>Фильтр</summary>
                     <div className='filter-box'>
                        <label className='filter-label'>Средняя зарплата:
                           <div className='filter-input-box'>
                              <input value={this.state.minSalary} onChange={this.handleChangeSalary} className='filter-input salary' placeholder="₽ min"></input>
                              {/* <input className='filter-input' placeholder="₽ max"></input> */}
                           </div>
                        </label>
                        <hr></hr>
                        <label className='filter-label'>Население:
                           <div className='filter-input-box'>
                              <input className='filter-input' value={this.state.minPopulation} onChange={this.handleMinPopulationChange} placeholder="min"></input>
                              <input className='filter-input' value={this.state.maxPopulation} onChange={this.handleMaxPopulationChange} placeholder="max"></input>
                           </div>
                        </label>
                        <hr></hr>
                        <label className='filter-label'>Стоимость м² в центре:
                           <div className='filter-input-box'>
                              <input className='filter-input' value={this.state.minHousingCost} onChange={this.handleMinHousingCostChange} placeholder="₽ min"></input>
                              <input className='filter-input' value={this.state.maxHousingCost} onChange={this.handleMaxHousingCostChange} placeholder="₽ max"></input>
                           </div>
                        </label>
                        <hr></hr>
                        {/* <label className='filter-label'>Уровень безработицы:
                           <div className='filter-input-box'>
                              <input className='filter-input' placeholder="% min"></input>
                              <input className='filter-input' placeholder="% max"></input>
                           </div>
                        </label> */}
                        <button className='filter-button' onClick={this.findFilter}>Фильтр</button>
                     </div>
                  </details>
               </div>
               <div className="count-of-cities">
                  <label className='label-count-of-cities'>Городов на странице:
                     <input 
                        className='input_count-of-cities' 
                        onChange={this.handleInputCountChange} 
                        value={this.state.inputCount} 
                        type='number' 
                        min="1"

                        defaultValue=''
                        ref='myTestInput'>
                     </input>
                  </label>
                  <button className="count-of-cities-button" onClick={this.inputCountButton}>Ок</button>
               </div>
            </div>
      )
   }
}