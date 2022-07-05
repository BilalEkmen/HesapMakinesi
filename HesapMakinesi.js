let button = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("screen")[0];
let clear = document.getElementById("temizle");
let calculate = document.getElementById("hesapla");

for(i=0;i<16;i++){
    if(i!=12 && i!=14){
    button[i].addEventListener("click" , write)
    }
}

function write(){
    screen.value = screen.value + this.value
}

clear.addEventListener("click" , remove);
calculate.addEventListener("click" , account);

function remove(){
    screen.value = "";
}

function account(){
    screen.value = eval(screen.value)
}


/*
let dugme = document.getElementsByTagName("button");
//console.log(dugme); 16 buton varmış
//addEventListener = dinlemek yani tıklama olatını dinle
let screen = document.getElementsByClassName("screen")[0];
let calculate = document.getElementById("hesapla");
let clear = document.getElementById("temizle");

for(var i=0;i<16;i++){
    if(i!=12 && i!=14){
    dugme[i].addEventListener("click" , yazdir);
    }
}

function yazdir(){
    screen.value = screen.value + this.value;
}

calculate.addEventListener("click" , account);
function account(){
    screen.value = eval(screen.value);
}

clear.addEventListener("click" , deleted);
function deleted(){
    screen.value = "";
}
*/
