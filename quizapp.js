let btn1 = document.querySelector(".nav button")
let btn2 = document.querySelector(".start button")
let nav = document.querySelector(".nav")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let user1 = document.querySelector(".user1")
let anchor = document.querySelectorAll(".tag a")
let choose = document.querySelectorAll(".welcome button")




btn1.onclick = ()=>{
  
    let prmt = prompt("Enter user name")
    if(prmt.length!==0){
        alert("user created sucessfully ")
        btn1.remove();
        const para = document.createElement("p")
        para.classList.add("user")
        nav.append(para)
        para.innerHTML = prmt
        btn1.innerHTML = prmt
        sessionStorage.setItem("user",para.innerHTML)
        user1.innerHTML = sessionStorage.getItem("user")
        
    }
}
btn2.onclick = ()=>{
    if(btn1.innerHTML==="Create user"){
        alert("Create user first")
    }
    else{
        screen1.style.display = "none"
        screen2.style.display = "block"
    }
}
anchor[0].onclick = (e)=>{
    e.preventDefault();
        screen2.style.display = "none"
        screen1.style.display = "block"
}
anchor[1].onclick = (e)=>{
    e.preventDefault();
    screen2.style.display = "block"
}
