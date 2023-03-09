let li = document.querySelectorAll("nav ul li a");
let link1 = document.querySelector(".files a");
let button = document.querySelector(".email button");
let input = document.querySelector(".input");
let aviso = document.querySelector(".advertencia");

var reLargo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/



li.forEach( e => {
    e.addEventListener("mouseover", ee => {
        ee.target.style.textDecoration = "underline white";
        ee.target.style.color = "white";
    });
    
    e.addEventListener("mouseout", ee => {
        ee.target.style.textDecoration = "none";
        ee.target.style.color = "rgb(134, 140, 152)";
    });
});

/* boton1 */

link1.addEventListener("click", e => {
    e.target.style.backgroundColor =  "hsl(176, 68%, 80%)";
});


button.addEventListener("mousemove", e => {
    button.style.cursor = "pointer"
});

button.addEventListener("click", e => {
    if(reLargo.test(input.value)){
        console.log(input.value);
        input.classList.remove("cambioColor")
        aviso.style.display = 'none';
    }else{
        aviso.style.display = 'block';
        console.error("No es un email valido");
        input.classList.toggle("input")
    }
});
