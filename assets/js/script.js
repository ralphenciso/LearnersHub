window.onload = function init() {

var abt = document.querySelector(".about");
var mis = document.querySelector(".mission");
var vis = document.querySelector(".vision");





// custom scrollbar
abt.onmouseenter = customScroll;
mis.onmouseenter = customScroll;
vis.onmouseenter = customScroll;


function customScroll(e){

    var elmnt = e.target
    var cscroll = e.target.querySelector(".Scroll");
    var hdiff = elmnt.scrollHeight - elmnt.offsetHeight; 
    var sHeight =  elmnt.offsetHeight * elmnt.offsetHeight / elmnt.scrollHeight; 
    var vdiff = elmnt.offsetHeight - sHeight;
    sHeight -= cscroll.offsetTop;

    cscroll.style.height = sHeight.toString() + 'px';

    console.log(this.scrollHeight);


        elmnt.onscroll = function(){
            var sratio = this.scrollTop / hdiff;
            
            var tvalue = sratio * (hdiff + vdiff);
            
            if(tvalue >= (hdiff + vdiff)) {return};

            cscroll.style.transform = 'translateY(' + tvalue + 'px)'
        }


        elmnt.onmouseleave = function() {
            this.scrollTop = 0;
            cscroll.style.height = 0;
            cscroll.style.transform = 'translateY(0)';
        }

}





} //onload end