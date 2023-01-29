import app from './src/app.js';

const port = process.env.POR || 3000;


app.listen(port, ()=>{
    console.log(`Servidor escutando na porta ${port}`)
})