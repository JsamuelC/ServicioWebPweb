
# TAREA 5 SERVICIO WEB

Este proyecto consiste en la creación de un Servicio Web utilizando **Node.js** y la librería **Express**, que permite **listar y almacenar contactos** consumiendo el servicio externo:  
http://www.raydelto.org/agenda.php


---

## Vista del Proyecto

### GET

<img width="1365" height="688" alt="Captura de pantalla 2025-11-17 154158" src="https://github.com/user-attachments/assets/faf1771a-db8e-4541-a746-1531aa05105f" />

### POST

<img width="1322" height="681" alt="Captura de pantalla 2025-11-17 154436" src="https://github.com/user-attachments/assets/c64a415e-f6c3-40ee-8ff6-8b875805bdfc" />


### Validaciones

<img width="1315" height="675" alt="Captura de pantalla 2025-11-17 154504" src="https://github.com/user-attachments/assets/6f332542-d4e6-4cbe-99e6-19f8d3533366" />

### Contactos 

<img width="1309" height="644" alt="Captura de pantalla 2025-11-17 154528" src="https://github.com/user-attachments/assets/b8e93df2-762c-4f24-bfb0-1b443f732f14" />

---

## Instalación

1. Clona este repositorio o copia los archivos en tu máquina local.  
2. Abre una terminal en la carpeta del proyecto.  
3. Instala las dependencias necesarias ejecutando:

```bash
npm install
````

4. Inicia el servidor con:

```bash
node app.js
```

El servidor se ejecutará por defecto en:

```
http://localhost:3000
```

---

## Endpoints del Servicio

### GET /contactos

Obtiene la lista de contactos almacenados en el servicio de Raydelto.

### POST /contactos

Permite almacenar un nuevo contacto enviándolo al servicio remoto.
Campos requeridos:

* nombre
* apellido
* telefono

---

## Descripción

* **Framework:** Express.js
* **Cliente HTTP:** Axios
* **Puerto:** 3000
* **API Externa:** [http://www.raydelto.org/agenda.php](http://www.raydelto.org/agenda.php)

---

## Autor

**Josue Samuel Campusano**
**Matricula: 2024-1556**




