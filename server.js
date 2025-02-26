const exp = require('express');
const app=exp()
const port= 8080;

app.get('/',(req,res)=>{
    res.send('hello world');

});

app.listen(port,()=>{
    console.log(`running at ${port}`)
})