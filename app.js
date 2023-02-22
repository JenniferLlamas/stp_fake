//IMPORTACION DE LIBRERIAS
const
    cors = require('cors'),
    dotenv = require('dotenv'),
    express = require('express')
    
const bodyParser = require('body-parser')
const requestIp = require('request-ip');
//Configura las variables del .env para acceder a ellas.
dotenv.config();

//IMPORTACION RUTAS
const ClientesRouter = require('./routes/ClientesRouter')

const app = express();


app.use(cors({
	origin: true,
	credentials: true,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	optionsSuccessStatus: 200
}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(requestIp.mw())

//route inicio de prueba
app.get('/',({ originalUrl },response)=>{
    response.send(' - originalUrl -  ')
    response.send(originalUrl)
})

//AGREGAR RUTAS AL SERVIDOR
app.use(
    ClientesRouter
);

module.exports = app;