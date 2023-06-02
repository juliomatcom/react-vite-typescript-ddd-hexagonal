import { Car } from "../../ui/types/Car"

const cars = [
  {
    id: '1',
    name: 'Fusca',
    model: 'VW',
    description: 'Fusca 1972',
  },
  {
    id: '2',
    name: 'Gol',
    model: 'VW',
    description: 'Gol 2002',
  },
  {
    id: '3',
    name: 'Uno',
    model: 'Fiat',
    description: 'Uno 2000',
  },
]

const carsRepository = {
  getAll: () : Promise<Car[]>  => new Promise((resolve) => setTimeout(() => resolve(cars), 2000)),
  getById: (id: string): Promise<Car | undefined> => new Promise((resolve) => setTimeout(() => resolve(cars.find((car) => car.id === id)), 2000))
}

export default carsRepository