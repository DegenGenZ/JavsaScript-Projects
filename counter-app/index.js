
//selectid is the selection box id and jump is the increment or decrement value
selectid = document.getElementById("jump");

//This function has an event listener that checks if the selection changed and then assigns the selected value to the variable jump and then console logs the value
selectid.addEventListener('change', function(){
    jump = selectid.value
    console.log(jump)
})
let jump = selectid.value;
// sum is the sum of the buttons clicked which can be negative or a positive integer
let sum = 0;

//increment and decrement function work by taking the jump value from the selectid and applying the value to the +- sum

//inner html of the display sum
countdisplay = document.getElementById('count');   
//decrement function
btndec = document.getElementById("btndec");    
btndec.addEventListener("click", function (){
       sum = sum - parseInt(jump);
       countdisplay.innerHTML = sum;
       if(sum < 0){
        countdisplay.style.color = "red";
       }else if(sum == 0){
        countdisplay.style.color = "white";}

    });

//increment function
btninc = document.getElementById("btninc");
btninc.addEventListener("click", function (){
    sum = sum + parseInt(jump);
    countdisplay.innerHTML = sum;
    if(sum > 0){
      countdisplay.style.color = "green";
    }else if(sum == 0){
      countdisplay.style.color = "white";}
  })
  
//reset function
btnreset = document.getElementById("btnreset");
btnreset.addEventListener("click", function (){
    sum = 0;
    countdisplay.innerHTML = sum
    countdisplay.style.color = "white";
})


//changing color was done inside the increment and decrement function as  Im stupid and  could not figure out how to make the changecolor function work as the sum value always stayed 0 outside the function
