console.log("hello")

let age= document.querySelector(".Age");
let tribe=document.querySelector(".tribe");
let quiz=document.querySelector(".quiz");




quiz.onclick=function(){
    console.log("clicked")
    age= Number (age.value);
    console.log (age)
    console.log(4);

    tribe=tribe.value;
    
if(age<=15 && tribe=== "Sully Family"){
console.log(tribe);
}

else(age>=16 && tribe=== "Sully Family")
console.log(tribe)


    if(age>=16 && tribe==="Ocean Clan"){
       
    }
    else( age<15 && tribe==="Ocean Clan")
    console.log(tribe);
};


