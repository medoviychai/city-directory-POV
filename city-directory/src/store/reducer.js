const initialState = {
   cities: '',
   countOfCities: '',
   cityToFind: '',
   inputCount: '',
   cityToCompare: [],
   minSalary: '',
   minPopulation: '',
   maxPopulation: '',
   minHousingCost: '',
   maxHousingCost: '',
}

function reducer(state = initialState, action) {
   if (action.type === 'SEND_CITY_TO_FIND') {
      state.cityToFind = action.payload.cityToFind;

      // console.log("state", initialState.cityToFind);

      return initialState;
   } else if (action.type === 'SEND_ALL_CITIES') {
      state.cities = action.payload.cities;
      
      // console.log("store", initialState.cities);

      return initialState;
   } else if (action.type === 'FIND_CITY') {
      state.cityToFind = action.payload.cityToFind;

      let filter = [];
      filter = state.cities.filter((city) => {
         return city.name.toLowerCase() == state.cityToFind;  
         //  return city.name.toLowerCase() == state.cityToFind.trim();   

         // filter = city.name.toLowerCase().includes(this.state.city)
           
      });
      // console.log("filter", filter);
      state.countOfCities = filter;

      // if (state.cityToFind == '') {

      //    let link = `http://localhost:4000/countofcities?count=4&offset=0`;
      //    fetch(link)
      //       .then((res) => res.json())
      //       .then((data) => {
      //          state.countOfCities = data.data;
      //          console.log(data.data);
      //       })
      //       .catch((err) => console.log(err))
      //       return initialState;

      //    // state.countOfCities = state.cities;
      // }

      return initialState;
   } else if (action.type === 'CHANGE_COUNT_OF_CITIES_ON_PAGE') {
      state.inputCount = action.payload.inputCount;
      // console.log('reducer', state.inputCount);
      // let link = `http://localhost:4000/countofcities?count=${state.inputCount}&offset=0`;
      // fetch(link)
      //    .then((res) => res.json())
      //    .then((data) => {
      //       state.countOfCities = data.data;
      //       console.log(data);
      //    })
      //    .catch((err) => console.log(err))
      let newArr = state.cities.slice(0, state.inputCount);
      state.countOfCities = newArr;
      // console.log("store", initialState.inputCount);

      return initialState;
   } else if (action.type === 'ADD_CITY_TO_COMPARE') {
      state.cityToCompare.push(...action.payload.city);
      // console.log('store', state.cityToCompare);
      

      return initialState;
   } else if (action.type === 'FILTER') {
      state.minSalary = action.payload.minSalary;
      state.minPopulation = action.payload.minPopulation;
      state.maxPopulation = action.payload.maxPopulation;
      // state.minHousingCost = action.payload.minHousingCost;
      state.maxHousingCost = action.payload.maxHousingCost;
      
      let findCity = state.cities.filter(city => {
         // console.log('store', city.ap_price_meter, state.maxHousingCost, city.ap_price_meter > state.maxHousingCost);
         // return (city.average_salary > state.minSalary && city.population > state.minPopulation && city.population < state.maxPopulation);

      //   return (city.average_salary > state.minSalary && city.population > state.minPopulation && city.population < state.maxPopulation && city.ap_price_meter > state.minHousingCost && city.ap_price_meter < state.maxHousingCost);
         return (
            city.average_salary > state.minSalary &&
            city.population > state.minPopulation 
            // city.population < state.maxPopulation
            // state.maxHousingCost > city.ap_price_meter
            // city.ap_price_meter < state.maxHousingCost
            );
      })
      state.countOfCities = findCity;
      // console.log('findSalary', findSalary);
   } 
   return initialState;
}

// console.log("reducer", initialState)
export default reducer;