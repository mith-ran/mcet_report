import { update } from "../js/data.js";

console.log("hi");
export const sent_req=(data)=>{
    fetch('http://192.168.43.102:8080',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(respons=>respons.json())
    .then((datas)=>{
        datas.forEach((element) => {
        
        if(element.value=="wfw"){
            console.log("running")
        }
        else {
            let x=update(element.value,element.location);
            
            
        }
    })}
    )
    .catch(error=>console.error('error',error))
}
