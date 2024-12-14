let inteval;
let outPutsecond=document.getElementById("seconds");
let OutputTens = document.getElementById("tens");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");


function startimer(){
    tens++
   if (OutputTens <9){
        OutputTens.innerHTML="0"+tens}
    if (OutputTens >9){
        OutputTens.innerHTML=tens
    }
    if (OutputTens =99){
        outPutsecond++
        OutputTens.innerHTML="00"}
    if (outPutsecond <9){
        outPutsecond.innerHTML="0"+seconds}
    if (outPutsecond >9){
        outPutsecond.innerHTML=seconds
    }
  
}

function star(){
    clearInterval(inteval)
    Interval=addEventListener("click",setInterval(startimer {I
        
    }, 10);)

}

