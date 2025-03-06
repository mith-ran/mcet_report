import { update } from "../js/data.js";

console.log("hi");
export const sent_req=(data)=>{
    fetch('http://192.168.95.102:8080',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(respons=>respons.json())
    .then((datas)=>{console.log("received data"+datas);
        datas.forEach((element) => {
        let flag=1;
        if(element.value=="wfw"){
            console.log("running")
        }
        else if(flag==1&&element.value!="wfw"){
            let x=update(element.value,element.location);
            console.log(element);
            flag=2;
        }
    })}
    )
    .catch(error=>console.error('error',error))
}
