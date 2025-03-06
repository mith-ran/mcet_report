
//import { sent_req } from "../frond_end/req";
let data=JSON.parse(localStorage.getItem('information'))
if (!data){
  data=[{
    value: 'second',
    location: { lat: 10.665668867692968, lng: -282.9772567749024 }
  }];
}
console.log(data)
export let description_list = data;
export const update=(value,loc)=>{
  console.log("input1"+value)
  console.log("input2"+loc)

  let arr=[];
  let flag=1;
  description_list.forEach((element) => {
    if(value==element.value){
     
      flag=2;

      
      
    }
    else{
      console.log("same");
    }
  }
)

if(flag==1){
  description_list.push({value,location:loc});
  arr.push({value,location:loc});
  localStorage.setItem('information',JSON.stringify(description_list));
  console.log(description_list);

  }
  return(arr)
}
export const get=()=>{
  return(description_list);
}
//hiuyg55