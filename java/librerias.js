


// creamos boton carrito
const boton = document.getElementById("hola")

boton.addEventListener("click", ()=>{
    // alert('hey')
    Toastify({

        text: "lo hice andar lpm",
        
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        
})


