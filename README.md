# 🌦️ Clima App - Weather Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

Una aplicación web de página única (SPA) desarrollada en **React** para consultar el clima en tiempo real de cualquier ciudad. Diseñada con una arquitectura de componentes modular, un manejo robusto de peticiones asíncronas y una interfaz minimalista de alto contraste.

## 🚀 Características Principales

* **Búsqueda Dinámica:** Integración con la API de Geocoding para convertir nombres de ciudades en coordenadas exactas de manera asíncrona.
* **Datos en Tiempo Real:** Consumo de la API de **Open-Meteo** para obtener la temperatura actual, máximas, mínimas y estados atmosféricos.
* **Manejo de Estados y Errores:** Renderizado condicional preciso que gestiona estados de carga (Loading), visualización de datos (Success) y manejo de excepciones (Error).
* **Validación de Formularios:** Implementación de `react-hook-form` para validar los inputs del usuario de manera eficiente, evitando renderizados innecesarios y mejorando la performance.
* **Diseño Responsivo UI/UX:** Interfaz limpia construida con `react-bootstrap` y CSS puro personalizado, asegurando adaptabilidad en dispositivos móviles y de escritorio.

## 🛠️ Tecnologías y Herramientas

| Tecnología | Propósito en el Proyecto |
| :--- | :--- |
| **React 19** | Librería principal para el renderizado del DOM y manejo de hooks (`useState`). |
| **Vite** | Entorno de desarrollo ultra rápido y empaquetador optimizado. |
| **React-Bootstrap** | Sistema de grillas y componentes base de interfaz (Cards, Badges, Forms). |
| **React-Hook-Form** | Gestión del estado del formulario y validaciones estrictas de lado del cliente. |
| **Open-Meteo API** | Proveedor de datos meteorológicos y motor de geolocalización de código abierto. |

## 🏗️ Arquitectura del Proyecto

El código está estructurado priorizando la separación de responsabilidades y la escalabilidad:

* `App.jsx`: Actúa como el **Controlador**. Maneja el estado global de la aplicación y centraliza la lógica de las peticiones `fetch` utilizando bloques `try/catch/finally`.
* `Buscador.jsx`: Componente de entrada independiente. Encapsula la lógica de validación y emite eventos hacia el padre únicamente cuando los datos son seguros.
* `DataCard.jsx`: Componente presentacional encargado de mapear y renderizar la información meteorológica.
* `ErrorCard.jsx`: Componente de Fallback UI para notificar al usuario sobre búsquedas fallidas o problemas de red.

## 💻 Instalación y Uso local

Si deseás levantar este proyecto en tu entorno local, seguí estos pasos:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/Franc-Devel/apiClima.git](https://github.com/Franc-Devel/apiClima.git)
