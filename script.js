/*========== typing animation =================*/
var  typed =new Typed(".typing",{
    strings:["","Web Designer..","Web Developer..","Logo Designer..","Graphic Designer.."],
    typespeed:100,
    Backspeed:60,
    loop:true
})

var  typed =new Typed(".design",{
    strings:["","Web Designer","Web Developer","Logo Designer","Graphic Designer"],
    typespeed:100,
    Backspeed:60,
    loop:true
})
/*----menu hide----*/
var nav= document.getElementsByClassName("nav");
function open(){
    nav.style.left= "0";
}
function close(){
    nav.style.left= "-200px";
}