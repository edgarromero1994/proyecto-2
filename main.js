let contador = document.getElementById("contar")
let value = 0
let btnInc = document.querySelector(".incr");
let btnDec = document.querySelector(".decr");
let btnReset = document.querySelector(".reset");

btnInc.addEventListener("click", () => {value++;contador.textContent = value 
    if(value >= 0) {
        contador.style.color="green";     
    }

});
btnDec.addEventListener("click", () => {value-- ;contador.textContent = value 
    if(value < 0) {
        contador.style.color="red";     
    }                
});

btnReset.addEventListener("click", () => {value=0;contador.textContent = value
                                contador.style.color="green";

});






