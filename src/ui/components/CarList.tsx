import { Link } from "react-router-dom"
import { useContext } from "react"
import carContext from '../contexts/carContext';
import { Car } from "../types/Car"

function CarList() {
  const { cars, loading } = useContext(carContext);

  if (loading) {
    return <p>Loading...</p>
  }
  if (!cars?.length) {
    return <p>Ups, no cars found...</p>
  }

  return (
    <ul>
      {cars.map((car: Car) => (
        <li key={car.id}>
          <Link to={`/cars/${car.id}`}>
            {car.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CarList