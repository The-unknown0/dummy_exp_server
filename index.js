const exp = require('express');

const app = exp();
app.use(exp.urlencoded({extended: false}))
app.use(exp.json())

const l = console.log;

const PORT = 3000


app.get('/', (req, res) =>{
    l(req.method, 'request from', req.url);
    res.send({message : "your request is received"})
})
app.use((req, res)=>res.send({message : `not api found for ${req.url} request for`,}))
app.listen(PORT, () => console.log('Listening on', PORT));