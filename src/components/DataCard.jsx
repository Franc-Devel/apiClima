import { Badge, Row, Col } from "react-bootstrap";

const DataCard = ({ weatherData }) => {
  return (
    <div className="mt-4 p-4 border border-secondary rounded text-center bunker-panel">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <h2 className="m-0 text-white fw-bold">
          {weatherData.name}{" "}
          <Badge bg="info" text="dark" className="fs-6 ms-2">
            {weatherData.sys?.country}
          </Badge>
        </h2>
      </div>

      {weatherData?.weather && (
        <div className="d-flex justify-content-center">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            style={{ filter: "drop-shadow(0 0 8px rgba(0,216,255,0.5))" }}
          />
        </div>
      )}

      <div className="text-center mb-4">
        {/* Usamos el acento celeste para el dato más importante */}
        <h3 className="display-3 text-celeste fw-bold m-0">
          {Math.round(weatherData.main?.temp)}°C
        </h3>
        <span className="text-muted text-uppercase tracking-wide">
          {weatherData?.weather ? weatherData.weather[0].description : ""}
        </span>
      </div>

      <hr className="border-secondary" />

      <Row className="text-center text-light">
        <Col>
          <p className="text-muted mb-1 small text-uppercase">Mínima</p>
          <p className="fw-bold fs-5">
            {Math.round(weatherData.main?.temp_min)}°C
          </p>
        </Col>
        <Col>
          <p className="text-muted mb-1 small text-uppercase">Máxima</p>
          <p className="fw-bold fs-5">
            {Math.round(weatherData.main?.temp_max)}°C
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default DataCard;
