// Your code goes here



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

const introImg = document.querySelector('.intro img');

window.addEventListener("scroll", (event) => document.querySelector("body").style.color = "teal");

form.addEventListener('focus', (event) =>{
  event.target.style.background = 'orange'; }, true);
//BLUR
form.addEventListener('blur', (event) => {
  event.target.style.background = 'black';    
}, true);