import { createContext } from 'react';
import { Car } from '../../shared/interfaces/Car';

const context = createContext({
  loading: false,
  cars: [] as Car[],
})

export default context