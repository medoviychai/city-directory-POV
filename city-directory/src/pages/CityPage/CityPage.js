import React from 'react';
import './CityPage.css';

export default class CityPage extends React.Component {
   state = {
      cities: 'name',
      city: [],
      name: '',
      logo: '',
      image: '',
      description: '',

   }
componentDidMount() {
   // console.log("params", this.params);
   console.log("props", this.props.match);

   const id = 1;
   const link = `http://localhost:4000/cities/${id}`
   fetch(link)
      .then(res => res.json())
      .then(data => {
            this.setState({name: data[0].name});
            this.setState({logo: data[0].logo});
            this.setState({image: data[0].image});
            this.setState({description: data[0].description});

            // console.log(this.state.city)
      })
      .catch((err) => console.log(err))
}
//       console.log("params", this.props.match.params.id);
//       const id = this.props.match.params.id;

//       if (id) {
        
//       } else {
//             console.log(`Фильм не найден по id ${id}`);
//         }
// }
   
   render () {
      const {name, logo, image, description } = this.state;
      return (
         <div className='box-of-city'>
            <div className='wrap'>
               <img className='main-image' src={image}></img> 
               <div className='main-box'>
                  <div className='title-wrap'>
                     <h2 className='main-title'>{name}</h2>
                     <img className='main-logo' src={logo}></img>
                  </div>
                  <p className='main-description'>{description}</p>
               </div>
               <div>
                  
               </div>
            </div>
         </div>
      )
   }
}