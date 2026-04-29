# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Proyecto Integrador - Frontend 2 🚀

[![React](https://img.shields.io/badge/React-18.x-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-yellow?logo=vite&logoColor=black)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-9.x-red?logo=npm&logoColor=white)](https://www.npmjs.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github&logoColor=white)](https://github.com/)

---

<details>
<summary>📌 Descripción del Proyecto</summary>

Este proyecto corresponde al **Primer Avance del Proyecto Integrador de Frontend 2**.  
El objetivo principal es construir una arquitectura escalable en **React** utilizando **Vite**, aplicando buenas prácticas de organización, componentes funcionales y trabajo colaborativo con Git y GitHub.

En esta primera fase se implementa:

- Estructura profesional de carpetas
- Layout base (Navbar, Main, Footer)
- Organización modular del proyecto
- Trabajo colaborativo con control de versiones

</details>

---

<details>
<summary>🏗️ Arquitectura del Proyecto</summary>

```plaintext
src/
├── assets/         # Recursos estáticos (imágenes, estilos)
├── components/     # Componentes reutilizables (Navbar, Footer, Card)
├── helpers/        # Funciones auxiliares
├── pages/          # Vistas principales (Services)
├── router/         # Configuración futura de navegación
├── services/       # Conexión futura con backend
├── App.jsx         # Orquestador principal (Layout base)
└── main.jsx        # Punto de entrada de la aplicación

</details>

---

<details> <summary>🧩 Tecnologías Utilizadas</summary>

⚛️ React

⚡ Vite

🎨 CSS

🗂 Git & GitHub

</details>

<details> <summary>🖥️ Versiones de Software</summary>

Node.js: v18.x o superior

npm: v9.x o superior

Vite: 5.x

React: 18.x

(Verificar versiones con node -v y npm -v)

</details>

...

<details> 
<summary>⚙️ Instalación y Ejecución</summary>

Clonar el repositorio:

git clone https://github.com/usuario/nombre-del-repositorio.git

Ingresar al proyecto:

cd nombre-del-repositorio

Instalar dependencias:

npm install

Ejecutar en entorno de desarrollo:

npm run dev

Abrir en el navegador:

http://localhost:5173

</details>

...

<details> <summary>👥 Autores</summary>
Nombre	                    Usuario GitHub
Ana Maria Piedrahita     	@Anavalencia17
Samuel Martinez           	@Samuel200730
Keimer valoyes            	@Valoyes14

</details>

### HU1: Estructura del proyecto
**Como** desarrollador  
**Quiero** organizar el proyecto en componentes y páginas  
**Para** mantener un código limpio y escalable  
✅ Estado: Completada  

### HU6: Consumo de servicios
**Como** usuario  
**Quiero** ver datos desde una API  
**Para** visualizar información dinámica  
✅ Estado: Completada 


### HU11: Manejo de datos (DTOs) 
**Como** desarrollador 
**Quiero** estructurar los datos recibidos 
**Para** facilitar su uso en la interfaz 
✅ Estado: Completada