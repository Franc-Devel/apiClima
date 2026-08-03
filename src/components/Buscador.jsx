import { Form, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Buscador = ({ onBuscar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Esta función se ejecuta solo si la validación pasa
  const procesarFormulario = (data) => {
    onBuscar(data.ciudad); // Le pasamos la ciudad al componente padre (App.jsx)
    reset(); // Limpiamos el input
  };

  return (
    <Form onSubmit={handleSubmit(procesarFormulario)} className="mb-4">
      <InputGroup>
        <Form.Control
          className="bunker-input"
          placeholder="Ingrese una ciudad (ej. Mendoza, Tucumán)"
          {...register("ciudad", {
            required:
              "⚠️ Ingrese el nombre de una ciudad para iniciar el escaneo.",
            minLength: {
              value: 3,
              message: "⚠️ El nombre debe tener al menos 3 caracteres.",
            },
          })}
        />
        <Button variant="outline-info" type="submit">
          Buscar
        </Button>
      </InputGroup>
      {/* Mensaje de error si la validación falla */}
      {errors.ciudad && (
        <Form.Text className="text-danger mt-2 d-block text-start">
          {errors.ciudad.message}
        </Form.Text>
      )}
    </Form>
  );
};

export default Buscador;
