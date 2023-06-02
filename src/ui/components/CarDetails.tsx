import { Car } from "../types/Car"

function CarDetails({ car }: { car: Car }) {
  return (
    <div>
      <h1>{car.name}</h1>
      <h2>{car.model}</h2>
      <p>{car.description}</p>
    </div>
  )
}

export default CarDetails