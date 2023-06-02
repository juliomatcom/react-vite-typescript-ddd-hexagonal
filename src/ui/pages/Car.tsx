import { useContext } from 'react'
import carContext from '../contexts/carContext'
import { useParams } from 'react-router-dom'
import CarDetails from '../components/CarDetails'

function Cars() {
  const { cars } = useContext(carContext)
  const { id } = useParams()

  const car = cars.find(car => car.id === id)

  if (!car)  return <p>Ups, no car found...</p>

  return <div className='car-page'>
    <CarDetails car={car} />
  </div>
}

export default Cars