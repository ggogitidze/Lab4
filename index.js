// load express, initiate app
const express = require('express');
const app = express();
const port = 3000;
// static files
app.use(express.static('public'));

var hits = {};
app.get('/hits/:pageId', (req,res)=>{
    const pageHits = (hits[req.params.pageId]||0) + 1;
    hits[req.params.pageId] = pageHits;
    res.send((pageHits).toString());
});

// dynamic content routes
app.get('/date', (req, res) => {
 res.send(new Date().toString());
});

// default route
app.all('*',(req,res)=>{res.status(404).send('Invalid URL.')});
// start server
app.listen(port, ()=>console.log(
    "currently on port" + port
));