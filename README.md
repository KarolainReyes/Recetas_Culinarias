# 🍽️ API REST - Plataforma de Recetas Culinarias

Esta API permite gestionar **usuarios, recetas e ingredientes** en una plataforma culinaria.  
Fue desarrollada con **Node.js**, **Express** y **MongoDB**, siguiendo las buenas prácticas de organización y modularidad.

---

## 🚀 Características principales

La API permite:

### 👤 Gestión de Usuarios
- Registrar nuevos usuarios.
- Consultar la lista de usuarios registrados.
- Ver la información de un usuario específico.
- Actualizar datos de un usuario.
- Eliminar un usuario y todas sus recetas asociadas.

### 🧁 Gestión de Recetas
- Crear recetas con título y descripción.
- Consultar todas las recetas disponibles.
- Ver una receta específica con sus ingredientes.
- Editar una receta existente.
- Eliminar una receta.
- Consultar todas las recetas creadas por un usuario.

### 🥦 Gestión de Ingredientes
- Agregar ingredientes a una receta existente.
- Consultar los ingredientes de una receta.
- Eliminar ingredientes de una receta.
- Buscar todas las recetas que contengan un ingrediente específico.

---

## 🧰 Tecnologías utilizadas

- **Node.js** – entorno de ejecución de JavaScript.
- **Express.js** – framework para la creación de APIs REST.
- **MongoDB** – base de datos NoSQL.
- **Dotenv** – gestión de variables de entorno.
- **Nodemon** (opcional) – recarga automática en desarrollo.

---

## 📂 Estructura del proyecto

```
📦 plataforma-recetas
 ┣ 📂 src
 ┃ ┣ 📂 config
 ┃ ┃ ┗ 📜 db.js
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 services
 ┃ ┗ 📜 server.js
 ┣ 📜 .env
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## ⚙️ Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/KarolainReyes/Recetas_Culinarias.git
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno (.env)**
   ```env
   MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/
   DB_NAME=recetas_culinarias
   PORT=4000
   ```

4. **Insertar datos de prueba**
   ```bash
   node dataset.js
   ```

5. **Iniciar el servidor**
   ```bash
   npm start
   ```

---

## 📘 Documentación de Endpoints

### 👤 Usuarios

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **POST** | `/usuarios` | Registrar un nuevo usuario |
| **GET** | `/usuarios` | Listar todos los usuarios |
| **GET** | `/usuarios/:id` | Obtener información de un usuario |
| **PUT** | `/usuarios/:id` | Actualizar un usuario |
| **DELETE** | `/usuarios/:id` | Eliminar un usuario y sus recetas |

#### 🧾 Ejemplo - Crear usuario

**Request**
```json
POST /usuarios
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com"
}
```

**Response**
```json
{
  "message": "Usuario creado exitosamente",
  "usuario": {
    "_id": "67105a25f1...",
    "nombre": "Juan Pérez",
    "email": "juan@example.com"
  }
}
```

---

### 🧁 Recetas

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **POST** | `/recetas` | Crear una nueva receta |
| **GET** | `/recetas` | Listar todas las recetas |
| **GET** | `/recetas/:id` | Consultar una receta por ID |
| **PUT** | `/recetas/:id` | Actualizar una receta |
| **DELETE** | `/recetas/:id` | Eliminar una receta |
| **GET** | `/usuarios/:id/recetas` | Ver todas las recetas de un usuario |

#### 🧾 Ejemplo - Crear receta

**Request**
```json
POST /recetas
{
  "titulo": "Pollo al horno",
  "descripcion": "Receta deliciosa y fácil",
  "usuarioId": "67105a25f1..."
}
```

**Response**
```json
{
  "message": "Receta creada exitosamente",
  "receta": {
    "_id": "67106b1c0d...",
    "titulo": "Pollo al horno",
    "descripcion": "Receta deliciosa y fácil",
    "usuarioId": "67105a25f1..."
  }
}
```

---

### 🥦 Ingredientes

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **POST** | `/recetas/:id/ingredientes` | Agregar un ingrediente a una receta |
| **GET** | `/recetas/:id/ingredientes` | Ver los ingredientes de una receta |
| **DELETE** | `/recetas/:id/ingredientes/:ingredienteId` | Eliminar un ingrediente |
| **GET** | `/ingredientes/buscar/:nombre` | Buscar recetas por ingrediente |

#### 🧾 Ejemplo - Agregar ingrediente

**Request**
```json
POST /recetas/67106b1c0d/ingredientes
{
  "nombre": "Pollo"
}
```

**Response**
```json
{
  "message": "Ingrediente agregado correctamente",
  "ingrediente": {
    "_id": "67106d8f7b...",
    "nombre": "Pollo",
    "recetaId": "67106b1c0d..."
  }
}
```

---

## 🧠 Manejo de errores

La API devuelve respuestas claras ante errores comunes:

| Código | Descripción |
|--------|--------------|
| 400 | Datos inválidos o incompletos |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

**Ejemplo**
```json
{
  "error": "Usuario no encontrado"
}
```

---

## 📹 Video de explicación

[Click aquí](https://drive.google.com/file/d/10Hj_UZP4LREZMDzPToij_8Kr5dQHNF7j/view?usp=drivesdk )

## 🧩 Autores

* [Karolain Reyes](https://github.com/KarolainReyes)

* [Andres Leal](https://github.com/Andre07g)

* [Michel Rodriguez](https://github.com/MichelRodriguez05)
---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia MIT.  
Eres libre de usar, modificar y distribuir el código con atribución al autor original.
