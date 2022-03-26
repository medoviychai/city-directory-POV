const initialState = {
  cities: "",
  countOfCities: "",
  cityToFind: "",
  inputCount: "",
  cityToCompare: [],
  minSalary: 0,
  minPopulation: 0,
  maxPopulation: 5000000,
  minHousingCost: 0,
  maxHousingCost: 1000000,
};

function reducer(state = initialState, action) {
  if (action.type === "SEND_CITY_TO_FIND") {
    state.cityToFind = action.payload.cityToFind;

    return initialState;
  } else if (action.type === "SEND_ALL_CITIES") {
    state.cities = action.payload.cities;

    return initialState;
  } else if (action.type === "FIND_CITY") {
    state.cityToFind = action.payload.cityToFind;

    let filter = [];
    filter = state.cities.filter((city) => {
      return city.name.toLowerCase() == state.cityToFind;
    });
    state.countOfCities = filter;

    return initialState;
  } else if (action.type === "CHANGE_COUNT_OF_CITIES_ON_PAGE") {
    state.inputCount = action.payload.inputCount;

    let newArr = state.cities.slice(0, state.inputCount);
    state.countOfCities = newArr;

    return initialState;
  } else if (action.type === "ADD_CITY_TO_COMPARE") {
    state.cityToCompare.push(...action.payload.city);

    return initialState;
  } else if (action.type === "FILTER") {
    if (action.payload.minPopulation !== '') {
      state.minPopulation = action.payload.minPopulation;
    } 
    if (action.payload.maxPopulation !== '') {
      state.maxPopulation = action.payload.maxPopulation;
    }
    if (action.payload.minSalary !== '') {
      state.minSalary = action.payload.minSalary;
    }
    if (action.payload.maxHousingCost !== '') {
      state.maxHousingCost = action.payload.maxHousingCost;
    }

    let findCity = state.cities.filter((city) => {
      return (
        city.average_salary > state.minSalary &&
        city.population > state.minPopulation &&
        city.population < state.maxPopulation &&
        city.ap_price_meter < state.maxHousingCost
      );
    });
    state.countOfCities = findCity;

    return initialState;
  }
  return initialState;
}

export default reducer;
