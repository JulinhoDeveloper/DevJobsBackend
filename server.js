const express = require('express');

require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');
const jobsRoute = require('./routes/jobsRoute');
// servidor de express
const app = express();

// Banco de dados
dbConnection();

// CORS
app.use(cors())


// Leitura do body
app.use( express.json() );

// Rotas
app.use('/api/jobs/' , jobsRoute)

app.listen( process.env.PORT, () => {
    console.log(`Servidor na porta ${ process.env.PORT }`);
});
