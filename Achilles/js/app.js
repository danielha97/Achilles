let button = document.querySelector(".btn-full");
let signUp = document.querySelector(".signup-bar");
let submitBtn = document.querySelector(".Submit");

button.addEventListener("click",()=>{
    signUp.style.right="200px";
    signUp.style.display="block";
});

submitBtn.addEventListener("click",()=>{
    alert("You're all signed up!");
});


const appBtn = document.querySelector(".btn-ghost");

appBtn.addEventListener("click",()=>{
   window.scrollTo({
       left:0,
       top: 1000
   });
});


