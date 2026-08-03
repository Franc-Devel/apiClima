const ErrorCard = () => {
  return (
    <div className="mt-4 p-4 border border-danger rounded text-center bunker-panel">
      <h3 className="text-danger fw-bold mb-2">ERROR DE CONEXIÓN</h3>
      <p className="text-light m-0" style={{ opacity: 0.8 }}>
        No se encontraron registros atmosféricos para la ubicación ingresada.
        Por favor, verificá el nombre de la ciudad.
      </p>
    </div>
  );
};

export default ErrorCard;
