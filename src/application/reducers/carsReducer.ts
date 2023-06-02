import { Car } from "../../ui/types/Car";

const initialState = {
  loading: false,
  cars: [] as Car[],
}

interface actionType {
  type: string,
  payload: any
}

function carsReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case 'ADD_CARS':
      return {
        ...state,
        cars: [...state.cars, ...action.payload],
      };
    case 'REMOVE_CAR':
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export default carsReducer;