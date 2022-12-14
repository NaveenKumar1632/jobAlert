let searchcategories=document.querySelectorAll(".search-categories input")
let searchbtn=document.querySelector(".search-btn")
let skill=document.querySelector("#skill")


searchcategories.forEach((item)=>{
    item.addEventListener("keyup",(e)=>{
        let value=e.target.value.toLowerCase().trim()

        let card=document.querySelectorAll(".card")
        card.forEach((item)=>{
            let data=item.dataset.item
            console.log(data);
            if(data.includes(value)){
                item.style.display="block"
            }
            else{
                item.style.display="none"

            }
        
        })
    })
})

let apply=document.querySelectorAll(".apply")
console.log(apply);
let applyResult=document.querySelector(".apply-result")
let homeBtn=document.querySelector("#homebtn")

apply.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let text=e.target.innerHTML 
        
        if(text!=="Applied"){
            e.target.innerHTML="Applied"
            e.target.classList.add("applied")
            applyResult.style.display="block";        
        }
    
    })
})

homeBtn.addEventListener("click",()=>{
    applyResult.style.display="none"
    
})
