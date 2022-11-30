const date=document.querySelector(".container .footer #date");
console.log(date);


const log=document.querySelector(".container .log")
console.log(log);
// date.addEventListener('date',
// updatedvalue)

// function updatedvalue(e){
// log.textContent=e.target.value
// }

let datevalue , monthvalue, yearvalue
 date.oninput=(e)=>{
   datevalue= e.target.value;
    
}


const month=document.querySelector(".container .footer #month");

 month.oninput=(e)=>{
     monthvalue=  e.target.value
    console.log(e.target.value);
}

const year=document.querySelector(".container .footer #year");

year.oninput=(e)=>{

     const calcyear=e.target.value
    total=calcyear-1990;
    yearvalue=total;
    
    // console.log(total);
    // console.log(e.target.value);
}


const button=document.querySelector(".button");
console.log(button);
button.addEventListener('click',()=>{
    log.innerHTML=`Your age is ${datevalue} days ${monthvalue} month ${yearvalue} year`
})