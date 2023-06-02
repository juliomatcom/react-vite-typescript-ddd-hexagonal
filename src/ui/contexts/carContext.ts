import { createContext } from 'react';
import { Car } from '../types/Car';

const context = createContext({
  loading: false,
  cars: [] as Car[],
})

export default context