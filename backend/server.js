const exp = require('express');
const cors =require('cors')
const app=exp();
let data=[
    {
      value: "wfw",
      location: { lat: 10.663138421180006, lng: -282.971420288086 }
    }]
const port= 8080;

app.use(exp.json());
app.use(cors());

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




app.listen(port,'0.0.0.0',()=>{
    console.log(`running at localhost${port}`)
})