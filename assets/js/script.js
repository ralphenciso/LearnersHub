window.onload = function init() {

var abt = document.querySelector(".about");
var mis = document.querySelector(".mission");
var vis = document.querySelector(".vision");



abt.onmouseleave = function(){
    this.scrollTop = 0;
}

mis.onmouseleave = function(){
    this.scrollTop = 0;
}

vis.onmouseleave = function(){
    this.scrollTop = 0;
}



} //onload end