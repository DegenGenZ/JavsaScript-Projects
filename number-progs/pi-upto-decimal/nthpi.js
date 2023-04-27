disp = document.querySelector("#display")
piIndex = document.querySelector("#inputPi")
let pi = (22/7)
let finalpi;
piFinder = document.querySelector("#piFinder")
piFinder.addEventListener("click", function(){
    finalpi = pi.toFixed(piIndex.value)
    console.log(finalpi)
    if(piIndex.value <= 1){
        disp.innerHTML = "3.14"
    }else{
        disp.innerHTML = finalpi
    }
    
})