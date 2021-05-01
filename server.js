
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/angular-bootstrap-example'));

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + + '/dist/angular-bootstrap-example/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})