const exp = require('express');
const cors =require('cors');
const {Server}=require('socket.io');
const http=require('http')

const app=exp();
app.use(cors());
const server=http.createServer(app);
process.on('uncaughtException', (err) => {
    console.error("Uncaught Exception:", err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
});

app.use(exp.json());

const io= new Server(server,{
    cors:{
        origin:"*",
    },
})

require('./socket.js')(io)
let data=[
    {
      value: "wfw",
      location: { lat: 10.663138421180006, lng: -282.971420288086 }
    }]
const port= process.env.PORT || 8080;

app.post('/',(req,res)=>{
 
       req.body.forEach((element) => {
            if(element.name){
                console.log("empty")
            }
            else{

                data.push(element);
               
            }
       
       });
   
    res.json(data)
           
});




server.listen(port,()=>{
    console.log(`running at localhost via rail way${port}`)
})
