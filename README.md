# XM Energy Dashboard

## Descripción

XM Energy Dashboard es una aplicación web SPA desarrollada en React para visualizar y analizar métricas del sector energético colombiano utilizando la API pública de XM.

La aplicación permite consultar información energética en tiempo real mediante gráficos interactivos y visualizaciones dinámicas enfocadas en el análisis de precios y generación eléctrica.

---

## Funcionalidades implementadas

### Panel de precios

* Consumo de datos horarios desde la API XM.
* Visualización gráfica de precios horarios de energía.
* Cálculo automático del precio promedio diario.
* Selector dinámico de fecha.
* Manejo de estados de carga, errores y ausencia de datos.

### Panel de generación

* Consumo de información de generación por recurso.
* Transformación y agrupación de datos.
* Visualización Top 10 de plantas despachadas mediante gráfica de barras.

---

## Tecnologías utilizadas

* React
* Vite
* TailwindCSS
* Axios
* Recharts
* React Router DOM

---

## Arquitectura del proyecto

El proyecto fue estructurado utilizando una arquitectura modular separando:

* Pages
* Components
* Hooks personalizados
* Services para consumo de API
* Layouts reutilizables

También se implementó manejo de proxy en Vite para solucionar restricciones CORS de la API XM.

---

## Instalación y ejecución local

### 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar al proyecto

```bash
cd xm-energy-dashboard
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar entorno local

```bash
npm run dev
```

---

## Despliegue

La aplicación puede desplegarse fácilmente en plataformas como:

* Vercel
* Netlify

---

## Consideraciones técnicas

* La API XM presenta restricciones CORS para consumo directo desde frontend, por lo que se configuró un proxy utilizando Vite.
* Se implementó manejo de errores para mejorar la experiencia del usuario ante fallos de red o ausencia de datos.
* El diseño es responsive y adaptable a diferentes tamaños de pantalla.

---

## Autor

Desarrollado por Laura Correa.
