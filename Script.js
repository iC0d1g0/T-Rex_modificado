const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
let scoreElement = document.getElementById("score");
let vidacountElement = document.getElementById("vidacount")
let score = 0;
let vida= 3;
let hasJumped = false;
let dead= false;

function saltar(){
    if(dino.classList != "saltar"){      
        dino.classList.add("saltar");
        setTimeout(function(){
            dino.classList.remove("saltar");
        }, 300);
    } 
}


let isAlive=setInterval(function(){
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    vidacountElement.textContent = vida;
    scoreElement.textContent = score;    
    if(cactusLeft < 30 && cactusLeft > 0 && dinoTop <=70 && dinoTop >= 0){
      scoreElement.textContent = score;
      vida= vida - 1;
      if(vida==0){
        score=0;
        dead=true;
        alert("GAME OVER!!!!!! "+"Chocaste! tu puntuacion fue de " + score);
        vidacountElement.textContent = vida;
        vida=3;
    }else{
        dead=false;
    }
    }
    if (hasJumped) {   
        score += 1;
        scoreElement.textContent = score;
        hasJumped = false; 
    }
},80);

document.addEventListener("keydown",function(event){
    saltar();
    hasJumped = true;
    console.log("Score : "+ score);
},10); 