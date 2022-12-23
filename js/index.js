'use strict'
let documentReady = () => {
    
    let menu = document.getElementById("menu");
    
    let cont = 1;
    let classMenu = () => {
        let header = document.getElementById("header");
        header.classList.add("header-change");
        console.log(cont);
        
        let nav = document.getElementById("nav__list-container");
        if (cont % 2 == 0){
            nav.classList.toggle("menu-change");
            cont+=1;
        }else{
            nav.classList.add("menu-change");
            cont+=1;
        }
    }

    menu.addEventListener('click', classMenu);
    //

    let scroll = () =>{
        let header = document.getElementById("header");
        let position = window.scrollY;
           console.log(position);
        if(position>0){
            header.classList.add("header-change");
        }else{
            header.classList.toggle("header-change");
        }
    }
    window.addEventListener('scroll', scroll);
    

}

document.addEventListener('DOMContentLoaded', documentReady);

