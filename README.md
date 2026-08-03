# 🌦️ Weather Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"/>
</p>

<p align="center">
Aplicación web desarrollada en <strong>React</strong> que permite consultar el clima en tiempo real de cualquier ciudad del mundo mediante el consumo de APIs REST. El proyecto fue construido priorizando una arquitectura limpia, componentes reutilizables y una excelente experiencia de usuario.
</p>

---

# 📖 Descripción

Este proyecto consiste en una **Single Page Application (SPA)** que permite al usuario buscar cualquier ciudad y visualizar información meteorológica actualizada.

La aplicación utiliza dos servicios de la API de **Open-Meteo**:

* Geocoding API para obtener las coordenadas de una ciudad.
* Weather Forecast API para recuperar la información meteorológica.

Durante el desarrollo se aplicaron principios de separación de responsabilidades, renderizado condicional y manejo robusto de estados asíncronos.

---

# ✨ Características

## 🔍 Búsqueda Inteligente

* Conversión automática de ciudades a coordenadas.
* Soporte para ciudades de cualquier país.
* Validación de entradas antes de realizar peticiones.

---

## 🌤 Información Meteorológica

Obtención en tiempo real de:

* 🌡 Temperatura actual
* 🔺 Temperatura máxima
* 🔻 Temperatura mínima
* ☁ Estado del clima
* 📍 Ciudad consultada

---

## ⚡ Manejo de Estados

La aplicación contempla todos los escenarios posibles:

* Loading mientras se realiza la consulta
* Datos encontrados
* Ciudad inexistente
* Error de conexión
* Validaciones del formulario

---

## 📱 Responsive Design

La interfaz fue diseñada para adaptarse correctamente a:

* Desktop
* Tablets
* Smartphones

Utilizando React-Bootstrap junto con estilos personalizados.

---

# 🛠 Tecnologías Utilizadas

| Tecnología      | Descripción                                    |
| --------------- | ---------------------------------------------- |
| React 19        | Librería principal para la interfaz de usuario |
| Vite            | Bundler y entorno de desarrollo                |
| React Hook Form | Validación y manejo eficiente del formulario   |
| React Bootstrap | Componentes visuales y sistema responsive      |
| Bootstrap 5     | Estilos base                                   |
| CSS3            | Personalización de la interfaz                 |
| Fetch API       | Consumo de servicios REST                      |
| Open-Meteo API  | Datos meteorológicos                           |

---

# 🏗 Arquitectura

```
src
│
├── components
│   ├── Buscador.jsx
│   ├── DataCard.jsx
│   └── ErrorCard.jsx
│
├── App.jsx
├── main.jsx
└── styles.css
```

## Responsabilidades

### App.jsx

* Administración del estado global.
* Peticiones HTTP.
* Manejo de errores.
* Renderizado condicional.
* Comunicación entre componentes.

---

### Buscador.jsx

* Validación del formulario.
* Gestión de inputs.
* Envío de datos al componente padre.

---

### DataCard.jsx

* Componente puramente presentacional.
* Renderiza toda la información del clima.

---

### ErrorCard.jsx

* Encargado de mostrar mensajes amigables cuando ocurre un error.

---

# 🔄 Flujo de la Aplicación

```text
Usuario

     │

     ▼

Escribe una ciudad

     │

     ▼

Validación del formulario

     │

     ▼

Open-Meteo Geocoding API

     │

Obtiene Latitud y Longitud

     │

     ▼

Open-Meteo Weather API

     │

     ▼

Renderizado de la información
```

---

# 🚀 Instalación

## 1 Clonar el repositorio

```bash
git clone https://github.com/Franc-Devel/apiClima.git
```

## 2 Entrar al proyecto

```bash
cd apiClima
```

## 3 Instalar dependencias

```bash
npm install
```

## 4 Ejecutar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en:

```
http://localhost:5173
```

---

# 📂 APIs Utilizadas

### Geocoding API

Convierte el nombre de una ciudad en coordenadas geográficas.

```
https://geocoding-api.open-meteo.com/
```

---

### Weather Forecast API

Obtiene la información meteorológica utilizando las coordenadas.

```
https://api.open-meteo.com/
```

---

# 💡 Buenas Prácticas Implementadas

✔ Componentes reutilizables

✔ Separación de responsabilidades

✔ Renderizado condicional

✔ Manejo de errores

✔ Código modular

✔ Formularios validados

✔ Arquitectura escalable

✔ Diseño responsive

✔ Código limpio

✔ Nombres descriptivos

✔ Estados controlados mediante Hooks

✔ Manejo asíncrono con async/await

---

# 📸 Capturas

> Se recomienda agregar imágenes del proyecto aquí para mostrar la interfaz y mejorar la presentación del repositorio.

```
/assets/screenshots/home.png

/assets/screenshots/result.png

/assets/screenshots/error.png
```

---

# 🔮 Posibles Mejoras

* Historial de búsquedas.
* Favoritos.
* Geolocalización automática.
* Pronóstico de 7 días.
* Cambio entre °C y °F.
* Cambio de idioma.
* Modo oscuro.
* Animaciones con Framer Motion.
* Skeleton Loading.
* Cache de consultas.
* Tests con Vitest.

---

# 👨‍💻 Autor

### Francisco Agustín Delgado Ojeda

**Full Stack Developer | Data Science Student | React Developer**

GitHub

👉 https://github.com/Franc-Devel

LinkedIn

👉 *(Agregar enlace)*

---

# ⭐ Sobre este proyecto

Este proyecto fue desarrollado como parte de mi proceso de formación en desarrollo Full Stack con el objetivo de fortalecer conocimientos sobre React, consumo de APIs REST, manejo de estados, arquitectura basada en componentes y buenas prácticas de desarrollo.

Además de cumplir con los requerimientos funcionales, el foco estuvo puesto en escribir código mantenible, reutilizable y escalable, siguiendo un enfoque cercano al utilizado en proyectos reales.

---

<p align="center">
Si este proyecto te resultó interesante, no olvides dejar una ⭐ en el repositorio.
</p>
