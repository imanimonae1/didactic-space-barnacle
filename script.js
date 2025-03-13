console.log("hello")

let age= document.querySelector(".age");
let tribe=document.querySelector(".tribe");
let quiz=document.querySelector(".quiz");


quiz.onclick=function(){
    console.log("clicked")
    age= Number (age.value);
    console.log (age)
    console.log(4);

    tribe=tribe.value;
    console.log(tribe);



    if(age===18){
        console.log("ok 18")
    }
};


