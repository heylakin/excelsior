// import { characters } from "./data,js";

export function infiniteCharacters(location, arr){
    for (let i=0;i<5;i++) {
        doSetTimeout(i, location, arr)
    }
}

function doSetTimeout(i, location, arr) {
    let infiniteImageHTML = ``;
    let imageArray = [];
    arr.forEach((character) => {imageArray.push(character.image);});
    console.log(imageArray)
    setTimeout(() => {
        infiniteImageHTML = `<div class="infinite-image fade-in"><img src="${imageArray[i]}" /><p>${imageArray[i]}</p></div>`
        location.innerHTML = infiniteImageHTML; 
    }, '2000')
}