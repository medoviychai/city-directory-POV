import React from "react";
import './Cities.css';
import {Link} from "react-router-dom";
import store from '../../store/store';

export default class Cities extends React.Component {
   state = {
      cities: '',
      countOfCities: '',
      count: 0,
      city: '',
   }

  getCountOfCities = (offset) => {
   let link = `http://localhost:4000/countofcities?count=4&offset=${offset}`;
   fetch(link)
      .then((res) => res.json())
      .then((data) => {
         this.setState({countOfCities: data.data})
         // console.log(this.state.countOfCities);
      })
      .catch((err) => console.log(err))
}

getAllCities = () => {
   let link = `http://localhost:4000/cities`;
   fetch(link)
      .then((res) => res.json())
      .then((data) => {
         this.setState({cities: data})

         // console.log('cities', this.state.cities);

         store.dispatch({ 
            type: "SEND_ALL_CITIES", 
            payload: {cities: this.state.cities},
         });
         // console.log('getAllCities', this.state.cities);
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
   this.getCountOfCities(this.state.cities.length - 4);
}

  componentDidMount() {
      this.getAllCities();
      this.getCountOfCities(0);
      // this.getCountOfCitiesFromInput(this.state.countOfCities);

      const state = store.getState();
      this.setState({city: state.cityToFind});

      store.subscribe(() => {
         const state = store.getState();
         if (state.countOfCities != '') {
            this.setState({
               city: state.cityToFind,
               countOfCities: state.countOfCities
            })
         }
      //  this.setState({ cities: filter }); 
      }) 

      // console.log('cities', this.state.cities);

      // store.dispatch({ 
      //    type: "SEND_ALL_CITIES", 
      //    payload: {cities: this.state.cities},
      // });

  }

//   handle = () => {
//    // console.log("cities state", this.state.cities);
//    // console.log("city state", this.state.city);
//       let filter = [];
//       filter = this.state.cities.filter((city) => {
//          // filter = city.name.toLowerCase().includes(this.state.city)
//          return city.name.toLowerCase() == this.state.city.trim();
         
//       });
//       // console.log("filter", filter);
//       this.setState({countOfCities: filter})
//   }
   addToCompare = (e) => {
     
         let link = `http://localhost:4000/cities/${e.target.id}`;
         fetch(link)
            .then((res) => res.json())
            .then((data) => {
               // console.log(data);
               store.dispatch({
                  type: 'ADD_CITY_TO_COMPARE',
                  payload: {
                      city: data
                  }
              })
               // state.cityToCompare.push(data);
            })
            .catch((err) => console.log(err))
      // console.log('id', this.state);
      // console.log('id1', e.target.id);
      
   }

//   getCountOfCitiesFromInput = (count) => {
//    let link = `http://localhost:4000/countofcities?count=${count}&offset=0`;
//    fetch(link)
//       .then((res) => res.json())
//       .then((data) => {
//          console.log('data', data);
//          this.setState({countOfCities: data})
//          // console.log(data);
//       })
//       .catch((err) => console.log(err))
//    }

   render() {
               // console.log('state', this.state.countOfCities);
      // this.getAllCities();
      // const filter = '';
      //  this.state.cities.filter((city) => {
      //    return filter = city.name.toLowerCase().includes(this.state.city)
      // });
      // this.setState({countOfCities: filter})

      // console.log("cities state", this.state.cities);
      // console.log("city state", this.state.city);
      console.log('count', this.state.countOfCities);
      return(
            <><p className='count-of-cities-on-page'>Городов на странице: {this.state.countOfCities.length}</p><br></br>
               {this.state.countOfCities ? 
               <ul className="cities-box">
                   {this.state.countOfCities.map((city) => ( 
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
                              <button className='compare-button' id={city.id} onClick={this.addToCompare}>Добавить в сравнение</button>
                           </div>
                       </li>
                   ))}
               </ul> 
                : <h2>Грузим города, подождите пожалуйста!</h2>
               }
               <button className='page-flip-button' onClick={this.pageFlipFirst}>В начало</button>
               <button className='page-flip-button' onClick={this.pageFlipNext}>Дальше</button>
               <button className='page-flip-button' onClick={this.pageFlipEnd}>В конец</button>
            </>
      )

      // ({!this.state.countOfCities.count / 5 ? 0 : this.state.countOfCities.count / 5})
   //    return ( 
   //       <>{this.state.city ? 
   //           <ul className="">
   //               {this.state.cities.filter((city) => (
   //                   <li>
   //                      {city.name.toLowerCase().includes(this.state.city)}
   //                   </li>
   //               ))}
   //           </ul> : <h1>По Вашему запросу ничего не найдено</h1>
   //           }
   //       </>
   //   );
   }
}

// export default function Cities() {
//    const [city, setCity] = useState('');

//    const location = useLocation();
//    let id = location.pathname.replace(/[^0-9]/g,"");
 
//    useEffect(() => {

//    })
// }