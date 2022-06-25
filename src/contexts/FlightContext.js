import { createContext, useState } from 'react';

const FlightContext = createContext();

export default FlightContext;

export function FlightProvider({ children }) {
  const [flightData, setFlightData] = useState({
    locationArrival: "",
    locationDeparture: "",
    dateDeparture: "",
    dateReturn: "2022-12-13",
  });

  return <FlightContext.Provider value={{ flightData, setFlightData }}>{children}</FlightContext.Provider>;
}
