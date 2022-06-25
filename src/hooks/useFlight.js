import { useContext } from 'react';
import FlightContext from '../contexts/FlightContext';

export default function useFlight() {
  return useContext(FlightContext);
}
