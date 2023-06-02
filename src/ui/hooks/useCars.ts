import { useEffect, useReducer } from "react";
import carsReducer from "../../application/reducers/carsReducer";
import carsRepository from "../../infrastructure/repositories/carsRepository";

function useCars() {
  const [carsState, dispatch] = useReducer(carsReducer, { cars: [], loading: false});

  useEffect(() => {
    async function getCars() {
      dispatch({ type: "SET_LOADING", payload: true })
      const cars = await carsRepository.getAll()
      dispatch({ type: "ADD_CARS", payload: cars })
      dispatch({ type: "SET_LOADING", payload: false })
    }
      getCars()
  }, [])

  return { carsState, dispatch };
}

export default useCars;