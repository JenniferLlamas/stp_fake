const http = require('http');
const fs = require('fs');
const https = require('https');

const app = require('./app');
const PORT = process.env.PORT;

if (!fs.existsSync("./storage/uploads"))
    fs.mkdirSync("./storage/uploads", { recursive: true })

if (!fs.existsSync("./storage/vouchers"))
    fs.mkdirSync("./storage/vouchers", { recursive: true })


//Creamos la aplicacion HTTP
let httpServer = null;


/**
 * Creamos la aplicacion y esperamos respuesta del servidor.
 */
if (require('./package.json').ssl) {
    /**
     * Importamos las llaves
     */
    let options = {
        key: fs.readFileSync('/etc/letsencrypt/live/stpbank.mx/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/stpbank.mx/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/stpbank.mx/chain.pem')
    };

    httpServer = https.createServer(options, app);
    httpServer.listen(PORT, () => {
        console.log('HTTPS Server running on port ' + PORT);
    });
} else {
    httpServer = http.createServer(app);
    httpServer.listen(PORT, () => {
        console.log('HTTP Server running on port ' + PORT);
    });
}