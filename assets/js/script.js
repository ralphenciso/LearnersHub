window.onload = function init() {


//back to top button
var backtop = document.querySelector('.backtop');
var container = document.querySelector('.container-fluid');


container.onscroll = function(){
  
    if (this.scrollTop >= this.offsetHeight /2) {
        backtop.classList.add('bton');
    } else {
        backtop.classList.remove('bton');
    }
}

backtop.onclick = function() {
    container.scrollTop = 0;
}


} //onload end