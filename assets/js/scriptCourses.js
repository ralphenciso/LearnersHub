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


// highlight subject selected

var si = document.querySelectorAll('.subjectItem')

si.forEach(function(s){    

    s.onclick = function() {
        si.forEach(function(s){s.classList.remove('activeSubject')})
        this.classList.add('activeSubject');
    }

})

backtop.onclick = function() {
    container.scrollTop = 0;
}




} //onload end