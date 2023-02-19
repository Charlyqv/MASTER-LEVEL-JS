"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart",(e)=>{
	e.dataTransfer.setData("clase",e.target.className);
});
// circulo.addEventListener("drag",()=>console.log(2));
// circulo.addEventListener("dragend",()=>alert("soltado"));


rectangulo.addEventListener("dragenter",()=>console.log(1));
rectangulo.addEventListener("dragover",(e)=>{
	e.preventDefault();
	console.log(2);
});

rectangulo.addEventListener("drop",(e)=>{
	console.log(e.dataTransfer.getData("clase"));
});
rectangulo.addEventListener("dragleave",()=>console.log(4));