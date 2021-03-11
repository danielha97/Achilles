let planBtn = document.querySelectorAll(".join");
let cross = document.querySelectorAll(".cross");


cross.forEach((cancel)=>{
    cancel.addEventListener("click",(e)=>{
        let hidden = e.currentTarget.parentElement.parentElement.parentElement;
        hidden.classList.remove("show-plan");
        console.log(hidden);
    })
    
});

planBtn.forEach((plan)=>{
    plan.addEventListener("click",(e)=>{
    let display = e.currentTarget.parentElement.childNodes[7]
    display.classList.add("show-plan");
    console.log(plan);
    });
});

const reviews = [
    {
    id: 1,
    profile:"Jane Smith",
    job:"Artist",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie odio eu arcu tincidunt, sit amet bibendum magna finibus. Morbi scelerisque eros quis suscipit mattis. Nam placerat, sapien et bibendum elementum, purus ante sollicitudin est, sit amet faucibus sapien nunc quis quam."
},
{
    id: 2,
    profile:"Senna Supardi",
    job:"Student",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:"Etiam imperdiet lobortis nibh, tristique porttitor arcu euismod ac. Aenean pulvinar tortor et risus gravida condimentum. Mauris varius metus tortor, nec dapibus ex dictum varius. Phasellus posuere, augue a porttitor bibendum, ex eros accumsan ex, eu mattis tellus est sed est."
},
{
    id: 3,
    profile:"Blake Johnson",
    job:"Athlete",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:"Integer congue purus eget hendrerit rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus a ipsum eget ultricies. Ut scelerisque massa at sem semper molestie. Mauris sed enim eu nisi mollis auctor vel eget nisl. In eget interdum tellus. Etiam pretium ut sapien in lobortis."
},
{
    id: 4,
    profile:"George Smith",
    job:"Web Developer",
    img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:"Cras fringilla sapien lectus, at consectetur arcu vehicula nec. Nunc sed dolor ut arcu vehicula dictum sed venenatis dolor. Quisque lobortis ipsum ac nibh pharetra, vel porta ligula scelerisque. Aliquam erat volutpat. Morbi in varius massa. Fusce vestibulum semper urna ut tempus."
}
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    displayPerson(currentItem);
}); 

let displayPerson = (currentItem)=>{
    const item = reviews [currentItem];
    img.src = item.img;
    author.textContent = item.profile;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click",()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
    currentItem = 0;
}
    displayPerson(currentItem);
});

prevBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem < 0){
    currentItem = reviews.length -1 
}

    displayPerson(currentItem);
});