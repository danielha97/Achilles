let questionBtn = document.querySelectorAll(".q-button");

questionBtn.forEach((butt)=>{
    butt.addEventListener("click",(e)=>{
        let question = e.currentTarget.parentElement.parentElement;

        question.classList.toggle("show-text");
    });
});