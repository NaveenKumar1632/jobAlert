let personaldet = document.querySelector(".personals-details")

let form = document.querySelectorAll(".forms")
let profile = document.querySelector(".profile")
let perbtn = document.querySelectorAll(".per-btn")
let profiForm = document.forms.profile
let qualiForm = document.forms.qualification
let resumeForm = document.forms.resume



profiForm.addEventListener("submit", forms)
qualiForm.addEventListener("submit", qualiUpload)
resumeForm.addEventListener("submit", resumeUpload)


let profileMenu = document.querySelector(".profile-menu")
let arrowMark = document.querySelector(".arrow-mark")
arrowMark.addEventListener("click", () => {
    document.querySelector(".profile-slider").classList.remove("profile-show")

})

profileMenu.addEventListener("click", () => {
    document.querySelector(".profile-slider").classList.add("profile-show")


})




let menu = document.querySelector(".menu")
let resbtn = document.querySelector("#res-btn")
resbtn.addEventListener("click", () => {
    personaldet.classList.add("active")
    menu.classList.add("activing")
    profileMenu.classList.add("activing")


})
let xmark = document.querySelector("#x-mark")
xmark.addEventListener("click", () => {
    personaldet.classList.add("active")
})


function forms(e) {
    e.preventDefault()

    let formData = new FormData(profiForm);
    let perObject = (Object.fromEntries(formData));
    
    post(perObject)

    let perForm = document.querySelector(".per-form input")
    if (perForm.value !== "") {
        setTimeout(() => {
            let hide = e.target.parentNode.parentNode
           
            hide.classList.add("active")
            
        },1000)

    } else {
        return false
    }

}

function qualiUpload(e) {
    e.preventDefault()
    let formData = new FormData(qualiForm)

    let quaObject = (Object.fromEntries(formData));
    let eduForm = document.querySelector(".edu-form input")

    if (eduForm.value !== "") {
        setTimeout(() => {
            let hide = e.target.parentNode.parentNode

            hide.classList.add("active")

        },1000)
        
    } else {
        return false
    }

    post1(quaObject)
}

function resumeUpload(e) {
    e.preventDefault()
    let formData = new FormData(resumeForm)
    let object = (Object.fromEntries(formData));
    let resuObject = object
    post2(resuObject)


}



let url = "https://jsonplaceholder.typicode.com/users"

function post(personal) {
    let stringify = JSON.stringify(personal)

    let xhrPost = new XMLHttpRequest()
    xhrPost.onload = function () {
        if (xhrPost.status === 201) {
            let parse = JSON.parse(xhrPost.response)
            let { name, email, location, number} = parse
            let proValue = perFormSubmit(name, email, location, number)

            showProfile(proValue)

        }
        else {
            console.log("ERROR");
        }
    }

    xhrPost.open("POST", url)
    xhrPost.setRequestHeader("content-type", "application/json")
    xhrPost.send(stringify)
}

function post1(qualification) {
    let stringify = JSON.stringify(qualification)

    let xhrPost = new XMLHttpRequest()
    xhrPost.onload = function () {
        if (xhrPost.status === 201) {
            let parse = JSON.parse(xhrPost.response)
            let { degree, speci, univer, year } = parse

            let eduValue = eduFormSubmit(degree, speci, univer, year)

            showEducation(eduValue)

        }
        else {
            console.log("ERROR");
        }
    }

    xhrPost.open("POST", url)
    xhrPost.setRequestHeader("content-type", "application/json")
    xhrPost.send(stringify)
}

function post2(resume) {
    let stringify = JSON.stringify(resume)
    let xhrPost = new XMLHttpRequest()

    xhrPost.onload = function () {
        if (xhrPost.status === 201) {
            let parse = JSON.parse(xhrPost.response)
            let resumefile = parse.resumefile
            let resumeValue = resumeFormSubmit(resumefile)


            showResume(resumeValue)
        }
        else {
            console.log("ERROR");
        }
    }

    xhrPost.open("POST", url)
    xhrPost.setRequestHeader("content-type", "application/json")
    xhrPost.send(stringify)
}



function perFormSubmit(name, email, location, number) {

    return `
    <div class="personal-title style">
        <h2>Personal Details</h2>
    </div>
    <div class="profile-img style">
     <div class="img">  
     </div>
    </div>
    <div class="forms-per">
        <div class="que-name">
            <p>Name:</p>
        </div>    
        <div class="ans-name">
            <p>${name}</p>
        </div>
        <div class="que-name">
            <p>Email:</p>
        </div>
        <div class="ans-name">
            <p>${email}</p>
        </div>
        <div class="que-name">
            <p>Location:</p>
        </div>
        <div class="ans-name">
            <p>${location}</p>
            </div>
            <div class="que-name">
            <p>Mobile Number:</p>
        </div>
        <div class="ans-name">
        <p>${number}</p>
        </div>
    </div>
        
    `;

}


function eduFormSubmit(degree, speci, univer, year) {
    return `
    <div class="educ-title style">
        <h2>Educational Details</h2>
    </div>
    <div class="forms-edu">
        <div class="que-name">
            <p>Highest Details:</p>
        </div>   
        <div class="ans-name">
            <p>${degree}</p>
        </div>
        <div class="que-name">
            <p>Specialization:</p>
        </div>
        <div class="ans-name">
            <p>${speci}</p>
        </div>
        <div class="que-name">
            <p>University:</p>
        </div>
        <div class="ans-name">
            <p>${univer}</p>
        </div>
        <div class="que-name">
            <p>Year of Passing:</p>
        </div>
        <div class="ans-name">
            <p>${year}</p>
        </div>

    </div>
    `;
}

function resumeFormSubmit(resumefile) {
    return `
    <div class="resumes-title style">
        <h2>Resume</h2>
    </div>
    <div class="forms-resume ">
        <div class="que-name">
            <p>${resumefile}</p>
        </div>
    </div>


    `;
}


function showProfile(data) {
    let performData = data

    let perEl = document.createElement("div")
    perEl.classList.add("per-profiles")

    let insertPer = document.querySelector(".profile-types")
    insertPer.classList.add("content")

    perEl.innerHTML = performData
    insertPer.append(perEl)

}

function showEducation(data) {
    let performData = data
    let perEl = document.createElement("div")
    perEl.classList.add("edu-profile")

    let insertPer = document.querySelector(".profile-types")
    insertPer.classList.add("content")

    perEl.innerHTML = performData
    insertPer.append(perEl)


}

function showResume(data) {
    let performData = data
    let perEl = document.createElement("div")
    perEl.classList.add("res-profile")

    let insertPer = document.querySelector(".profile-types")
    insertPer.classList.add("content")

    perEl.innerHTML = performData
    insertPer.append(perEl)
    
}

let searchCategories=document.querySelectorAll(".search-categories input")
let searchBtn=document.querySelector(".search-btn")
let skill=document.querySelector("#skill")


searchCategories.forEach((item)=>{
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


let upload=document.querySelector("#upload")
let photo=document.querySelector("#img")
let files=document.querySelector("#files")

files.addEventListener("change",function(){
    let chooseFile=this.files[0]
   
    if(chooseFile){
        let reader=new FileReader();
        reader.addEventListener("load",function(){
            photo.setAttribute("src",reader.result)
        
        })
        reader.readAsDataURL(chooseFile)
    }
})

// pre-loaded

let loaded=document.querySelector(".loaded")

window.addEventListener("load",()=>{
    setTimeout(()=>{
        loaded.style.display="none"
    },1000)
})



