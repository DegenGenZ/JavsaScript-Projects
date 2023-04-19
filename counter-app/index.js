let sum = 0;
countdisplay = document.getElementById('count');   
btndec = document.getElementById("btndec");    
btndec.addEventListener("click", function (){
        sum = sum - 1;
        countdisplay.innerHTML = sum;
    });
btninc = document.getElementById("btninc");
btninc.addEventListener("click", function (){
    sum ++;
    countdisplay.innerHTML = sum
})

btnreset = document.getElementById("btnreset");
btnreset.addEventListener("click", function (){
    sum = 0;
    countdisplay.innerHTML = sum
});
// function increase(){
//     document.getElementById('count').innerHTML = "1"
// }

// function reset(){ 
//     document.getElementById('count').innerHTML = "0"
// }

