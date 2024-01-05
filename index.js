let display = 0;
let display2 = 0;
let display3 = 0;
let display4 = 0;
function myfunction() {

    if(display === 0){
        document.querySelector(".dis1").removeAttribute("hidden");
        document.querySelector(".minus").removeAttribute("hidden");
        document.querySelector(".plus").setAttribute("hidden","true");
        display++;
  
    }
    else{
        document.querySelector(".dis1").setAttribute("hidden","true");
        document.querySelector(".minus").setAttribute("hidden","true");
        document.querySelector(".plus").removeAttribute("hidden");
        display--;
    }
    
};

function myfunction2() {

    if(display2 === 0){
        document.querySelector(".dis2").removeAttribute("hidden");
        document.querySelector(".minus2").removeAttribute("hidden");
        document.querySelector(".plus2").setAttribute("hidden","true");
        display2++;
  
    }
    else{
        document.querySelector(".dis2").setAttribute("hidden","true");
        document.querySelector(".minus2").setAttribute("hidden","true");
        document.querySelector(".plus2").removeAttribute("hidden");
        display2--;
    }
    
};

function myfunction3() {

    if(display3 === 0){
        document.querySelector(".dis3").removeAttribute("hidden");
        document.querySelector(".minus3").removeAttribute("hidden");
        document.querySelector(".plus3").setAttribute("hidden","true");
        display3++;
  
    }
    else{
        document.querySelector(".dis3").setAttribute("hidden","true");
        document.querySelector(".minus3").setAttribute("hidden","true");
        document.querySelector(".plus3").removeAttribute("hidden");
        display3--;
    }
    
};

function myfunction4() {

    if(display4 === 0){
        document.querySelector(".dis4").removeAttribute("hidden");
        document.querySelector(".minus4").removeAttribute("hidden");
        document.querySelector(".plus4").setAttribute("hidden","true");
        display4++;
  
    }
    else{
        document.querySelector(".dis4").setAttribute("hidden","true");
        document.querySelector(".minus4").setAttribute("hidden","true");
        document.querySelector(".plus4").removeAttribute("hidden");
        display4--;
    }
    
};