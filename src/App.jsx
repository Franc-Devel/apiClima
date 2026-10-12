import { useState } from "react";
import { Container } from "react-bootstrap";
import Buscador from "./components/Buscador";
import DataCard from "./components/DataCard";
import ErrorCard from "./components/ErrorCard";

// Función para traducir los códigos de Open-Meteo a los íconos que ya tenías
const getIconoClima = (wmoCode) => {
  if (wmoCode === 0) return { icon: "01d", desc: "Despejado" };
  if (wmoCode > 0 && wmoCode <= 3) return { icon: "02d", desc: "Nublado" };
  if (wmoCode >= 45 && wmoCode <= 48) return { icon: "50d", desc: "Niebla" };
  if (wmoCode >= 51 && wmoCode <= 67) return { icon: "09d", desc: "Lluvia" };
  if (wmoCode >= 71 && wmoCode <= 77) return { icon: "13d", desc: "Nieve" };
  if (wmoCode >= 95) return { icon: "11d", desc: "Tormenta" };
  return { icon: "03d", desc: "Variable" };
};

const App = () => {
  const [ciudad, setCiudad] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchClima = async (ciudadBuscada) => {
    setIsLoading(true);
    setError(false);

    try {
      // 1. Buscamos las coordenadas de la ciudad usando la API de Geocoding gratuita
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudadBuscada.trim())}&count=1&language=es`,
      );
      if (!geoResponse.ok) throw new Error("Error del servicio de ciudades");
      const geoData = await geoResponse.json();

      // Validamos si la ciudad existe
      if (!geoData.results || geoData.results.length === 0) {
        setError(true);
        setWeatherData(null);
        setIsLoading(false);
        return;
      }

      const { latitude, longitude, name, country_code } = geoData.results[0];

      // 2. Con las coordenadas, pedimos el clima a Open-Meteo
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
      );
      if (!weatherResponse.ok) throw new Error("Error del servicio meteorológico");
      const data = await weatherResponse.json();

      const climaActual = getIconoClima(data.current.weather_code);

      // 3. Formateamos los datos para engañar a nuestro DataCard y que no se rompa
      const adaptedData = {
        name: name,
        sys: { country: country_code },
        main: {
          temp: data.current.temperature_2m,
          temp_min: data.daily.temperature_2m_min[0],
          temp_max: data.daily.temperature_2m_max[0],
        },
        weather: [
          {
            description: climaActual.desc,
            icon: climaActual.icon,
          },
        ],
      };

      setWeatherData(adaptedData);
      setError(false);
    } catch (err) {
      console.error("Error de red:", err);
      setError(true);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuscar = (ciudadBuscada) => {
    setCiudad(ciudadBuscada);
    fetchClima(ciudadBuscada);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div
        className="bunker-panel w-100 text-center"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="text-celeste fw-bold mb-4"><img className="fauvor-nav-mark" src={`${import.meta.env.BASE_URL}fauvor/symbol.png`} alt="FAUVOR" width="42" height="62" /> FAUVOR Clima</h1>

        <Buscador onBuscar={handleBuscar} />

        {isLoading ? (
          <p className="mt-3 text-muted">{`> Iniciando conexión satelital para: ${ciudad}...`}</p>
        ) : error ? (
          <ErrorCard />
        ) : weatherData ? (
          <DataCard weatherData={weatherData} />
        ) : (
          <p className="mt-3 text-muted">
            {"> Esperando parámetros de ubicación..."}
          </p>
        )}
      </div>
    </Container>
  );
};

export default App;
