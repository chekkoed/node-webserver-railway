const http = require('http');


http.createServer( (req, res) =>{

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona ={
    //     id:1,
    //     nombre: 'Sergio'
    // }
    // res.write( JSON.stringify(persona));

    res.write('hola mundo');
    
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);