$("#carrusel").carousel();

// Enable Carousel Indicators
$(".item").click(function() {
    $("#carrusel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function() {
    $("#carrusel").carousel("prev");
});
$(".carousel-control-next").click(function() {
    $("#carrusel").carousel("next");
});



const formulario = document.getElementById("formulario");
const userName = document.getElementById("name");
const userEmail = document.getElementById("mail");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    console.log(userName.value);
    console.log(userEmail.value);
    alert("Estimad@ " + userName.value + ", reserva enviada, recibirá confirmación a su email!");
    document.getElementById("formulario").reset();
});