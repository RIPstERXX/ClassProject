//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { gallery } from './gallery'

for (let i of gallery){
    let i_thumb = document.getElementById('i' + i.id)
    i_thumb.innerHTML = `
    <img src="${i.img}" alt="${i.title}" class"img-thumbnail" width="100%" height="100%"/>
    `

    i_thumb.onclick = function(){
        displayImage(i)
    }
}

let selected_image = document.querySelector(".selected")
let jumbo = document.querySelector(".jumbotron")
function displayImage(image){
    let bg_img = `
    url('${image.img}')
    `
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = bg_img;
    jumbo.style.backgroundImage = bg_img;
    selected_image.innerHTML = `
    <div class="card">
    <img class="card-img-top" src="${image.img}" alt="${image.title}">
    <div class="card-body bg-dark">
        <h1 class="card-title text-light">${image.title}</h1>
        <p class="card-text">${image.RenderEngine}</p>
        <p class="card-text">${image.Date}</p>
    </div>
  </div>
    `
}