

let data=JSON.parse(localStorage.getItem('information'))
if (!data){
  data=[];
}
export let description_list = data;
export const update=(value,loc)=>{
  description_list.push({value,location:loc});
  console.log(description_list);
  localStorage.setItem('information',JSON.stringify(description_list));
}
export const get=()=>{
  return(description_list);
}