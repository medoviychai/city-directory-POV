import React from "react";
import './Cities.css';
import {Link} from "react-router-dom";

export default class Cities extends React.Component {
   state = {
      cities: '',
      countOfCities: '',
      count: 0,
   }

  getCountOfCities = (offset) => {
   let link = `http://localhost:4000/countofcities?count=4&offset=${offset}`;
   fetch(link)
      .then((res) => res.json())
      .then((data) => {
         this.setState({countOfCities: data})
         // console.log(this.state.countOfCities);
      })
      .catch((err) => console.log(err))
}

// cityOpen = (id) => {
//    let link = `http://localhost:4000/city/${id}`;
//    fetch(link)
//       .then((res) => res.json())
//       .then((data) => {
//          console.log(data);
//       })
//       .catch((err) => console.log(err))
// }

pageFlipFirst = () => {
   this.getCountOfCities(0);
}

pageFlipNext = () => {
   this.state.count += 4;
   this.getCountOfCities(this.state.count);
}

pageFlipEnd = () => {
   this.getCountOfCities(this.state.countOfCities.count - 4);
}

  componentDidMount() {
      // this.getAllCities();
      this.getCountOfCities(0);
  }

   render() {
      return(
            <>
               {this.state.countOfCities ? 
               <ul className="cities-box">
                   {this.state.countOfCities.data.map((city) => ( 
                       <li className="city-box">
                          <div className='image-box'>
                              <img className='city-image' src={city.image} alt='city image'></img>
                           </div>
                           <div className='city-info'>
                              <div>
                                 <h3 className="city-title">{city.name}</h3>
                                 <p className="city-description">{city.description}</p>
                                 <Link to={`/cities/${city.id}`} className='city-link'>Подробнее</Link>
                              </div>
                              <button className='compare-button'>Добавить в сравнение</button>
                           </div>
                       </li>
                   ))}
               </ul> 
                : <h2>Грузим города, подождите пожалуйста!</h2>
               }
               <button className='page-flip-button' onClick={this.pageFlipFirst}>В начало</button>
               <button className='page-flip-button' onClick={this.pageFlipNext}>Дальше</button>
               <button className='page-flip-button' onClick={this.pageFlipEnd}>В конец ({!this.state.countOfCities.count / 5 ? 0 : this.state.countOfCities.count / 5})</button>
            </>
      )
   }
}