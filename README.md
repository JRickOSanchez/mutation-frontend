# Mutation Detection Frontend

Aplicación web desarrollada en Angular que consume la API de detección de mutaciones genéticas.
El objetivo del frontend es mostrar de forma clara y ordenada las estadísticas y el historial
de verificaciones realizadas por el backend.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS

---

## Descripción general

La aplicación consume el backend de detección de mutaciones genéticas y muestra:

- Estadísticas generales obtenidas desde el endpoint `/api/stats`
- Historial de las últimas 10 verificaciones realizadas desde `/api/list`

La interfaz presenta la información de forma legible y organizada, sin mostrar el JSON en bruto.

---

## Requisitos

- Node.js (versión 18 o superior recomendada)
- Angular CLI

---

## Instalación y ejecución local

· Clonar el repositorio:

```bash
git clone https://github.com/JRickOSanchez/mutation-frontend
```

· Ejecutar los siguientes comandos desde la carpeta del proyecto:

```bash
npm install
ng serve
```

La aplicación quedará disponible en: http://localhost:4200

## Configuración de la API

El frontend consume el backend desplegado de forma remota en Render.

URL base de la API utilizada: https://mutation-api-luia.onrender.com/api

Los endpoints consumidos son:
· /stats
· /list

## Notas

· El frontend se ejecuta de forma local.
· El backend es accesible de forma remota.
· No se utilizan plantillas externas.
· El diseño y la estructura fueron desarrollados de forma personalizada.
