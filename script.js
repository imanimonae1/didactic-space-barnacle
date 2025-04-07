console.log("hello")

let age= document.querySelector(".Age");
let tribe=document.querySelector(".tribe");
let quiz = document.querySelector(".quiz");
let avatar=document.querySelector(".avatar");
let kiri=document.querySelector(".kiri");
kiri.style.display="none";
let message=document.querySelector(".message");
let neteyam= document.querySelector(".neteyam");
neteyam.style.display="none";
let tsireya= document.querySelector(".tsireya");
tsireya.style.display="none";
let aonung=document.querySelector(".aonung");
aonung.style.display="none";
quiz.addEventListener('click',function(){
    console.log("clicked");


    age= Number (age.value);
    console.log (age);
    console.log(4);

    tribe=tribe.value;
    
if(age<=15 && tribe==="Sully Family"){
console.log(tribe);
avatar.style.display="none";
kiri.style.display="block";
tsireya.style.display="none";
aonung.style.display="none";
message.innerHTML="YOU ARE KIRI!"
}

else if(age>=16 && tribe=== "Sully Family"){
console.log(tribe);
kiri.style.display="none";
avatar.style.display="none";
neteyam.style.display="block";
tsireya.style.display="none";
aonung.style.display="none";
message.innerHTML="YOU ARE NETEYAM";
}

    if(age>=16 && tribe==="Ocean Clan"){
       avartar.style.display="none";
       tsireya.style.display="none";
       kiri.style.display="none";
       aonung.style.display="block";
       message.innerHTML="YOU ARE AONUNG!";
    }
    else if( age<15 && tribe==="Ocean Clan"){
        tsireya.style.display="block";
        avatar.style.display="none";
        kiri.style.display="none";
        aonung.style.display="none";
        message.innerHTML="YOU ARE TSIREYA";
    }
});

