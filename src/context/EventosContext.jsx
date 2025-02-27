
import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto para las APIs
const EventosContext = createContext();

// Creamos un hook para consumir el contexto
export const useApi = () => {
  return useContext(EventosContext);
};

// Proveedor que va a envolver la aplicación
export const EventosContextProvider = ({ children }) => {
  const [datosSuperficie, setDatosSuperficie] = useState([]);
  const [datosInteriorMina, setDatosInteriorMina] = useState([]);

  // Función para obtener los eventos desde la API
  const fetchEventos = async () => {
    try {
      const response = await fetch("http://127.0.0.1:1880/api-eventos");
      const dataEventos = await response.json();
      // console.log("datos de eventos",dataEventos);

      // Filtrar los eventos que pertenecen a "SUPERFICIE"
      const eventosSuperficie = dataEventos.filter(
        (evento) => evento.MacAddressGw === "SUPERFICIE"
      );

      // Filtrar los eventos que pertenecen a "INTERIOR MINA"
      const eventosInteriorMina = dataEventos.filter(
        (evento) => evento.MacAddressGw === "INTERIOR MINA"
      );

      setDatosSuperficie(eventosSuperficie);
      setDatosInteriorMina(eventosInteriorMina);
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  };

  // Llamamos a fetchEventos inicialmente y luego cada 1 segundo
  useEffect(() => {
    fetchEventos(); // Llamar a la API inicialmente

    const intervalId = setInterval(fetchEventos, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <EventosContext.Provider value={{ datosSuperficie, datosInteriorMina }}>
      {children}
    </EventosContext.Provider>
  );
};

