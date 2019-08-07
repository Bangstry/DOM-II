// Your code goes here

const navAs = document.querySelectorAll('a');

navAs.forEach(function(item,index,array){
    item.addEventListener("click", (event)=>{
        // console.log('clicked', index);
        event.preventDefault();
    });
});



const btn = document.querySelector(".btn");
btn.addEventListener("dblclick", (event) => event.target.style.fontSize = "3rem");

const introGraph = document.querySelector(".intro p");
console.log(introGraph);
introGraph.addEventListener("mouseover", (event) => introGraph.style.fontWeight = "500");
introGraph.addEventListener("mouseout", (event) => introGraph.style.fontWeight = "bold");

document.querySelector("p").addEventListener("copy", e => 
{console.log(e);
alert("Oops");
});

document.querySelector("p").addEventListener("cut", e => alert("Yikes"))

const busImg = document.querySelector('.intro img');

busImg.addEventListener("drag", (e)=> {
    introText.style.transition = "1.5s";
    introText.style.color = "green";
});

busImg.addEventListener("dragend", (e)=> {
    introText.style.transition = "2s";
    introText.style.color = "blue";
});


window.addEventListener("scroll", (event) => document.querySelector("body").style.color = "teal");

form.addEventListener('focus', (event) =>{
  event.target.style.background = 'orange'; }, true);
//BLUR
form.addEventListener('blur', (event) => {
  event.target.style.background = 'black';    
}, true);

// stop propagation
document.querySelector(".intro p").addEventListener("click", e => {
    console.log(e);
    alert("stopping propagation is easy");
    e.stopPropagation();
});

document.querySelector("header.intro").addEventListener("click", e => alert("header was clicked"));


//stop nav refresh
document.querySelectorAll("nav a").forEach(item => {
    item.addEventListener("click", e => {
        e.target.style.color = "pink";
        e.preventDefault();
    })
})