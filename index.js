const numberBtn=document.querySelectorAll("[data-number]");
const operationBtn=document.querySelectorAll("[data-operation]");
const allclearBtn=document.querySelector("[data-all-clear]");
const dataEquals=document.querySelector("[data-equals]");
const deleteBtn=document.querySelector("[data-delete]");
const currOperand=document.querySelector("[data-current-operand]");
const prevOperand=document.querySelector("[data-previous-operand]");
                            

console.log(numberBtn);

numberBtn.forEach(num=>num.addEventListener("click",(e)=>{
 
 if (e.target.innerText==="." && currOperand.innerHTML.includes(".") ) return
 
   currOperand.innerHTML+=e.target.innerText;
 
}))

operationBtn.forEach(op=>op.addEventListener("click",(e)=>{

        if (prevOperand!=""){
          currOperand.innerHTML+=e.target.innerText;
         }
         prevOperand.innerHTML=currOperand.innerHTML;
         currOperand.innerHTML="";

}))


deleteBtn.addEventListener("click",()=>{
        currOperand.innerHTML="";
})
