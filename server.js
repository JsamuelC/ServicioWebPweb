const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const AGENDA_URL = 'http://www.raydelto.org/agenda.php';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/contactos', async (req, res) => {
    try {
        const response = await axios.get(AGENDA_URL);
        res.json({
            success: true,
            data: response.data,
            message: 'Contactos obtenidos exitosamente'
        });
    } catch (error) {
        console.error('Error al obtener contactos:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error al obtener contactos del servicio externo',
            error: error.message
        });
    }
});


app.post('/contactos', async (req, res) => {
    try {
        const { nombre, apellido, telefono } = req.body;

       
        if (!nombre || !apellido || !telefono) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos requeridos. Se necesitan: nombre, apellido y telefono'
            });
        }

       
        const response = await axios.post(AGENDA_URL, {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        res.json({
            success: true,
            data: response.data,
            message: 'Contacto almacenado exitosamente'
        });
    } catch (error) {
        console.error('Error al almacenar contacto:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error al almacenar contacto en el servicio externo',
            error: error.message
        });
    }
});


app.get('/', (req, res) => {
    res.json({
        message: 'Servicio Web de Contactos',
        endpoints: {
            'GET /contactos': 'Listar todos los contactos',
            'POST /contactos': 'Almacenar un nuevo contacto (requiere: nombre, apellido, telefono)'
        }
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Endpoints disponibles:`);
    console.log(`  GET  http://localhost:${PORT}/contactos - Listar contactos`);
    console.log(`  POST http://localhost:${PORT}/contactos - Almacenar contacto`);
});

