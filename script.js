function mostrarPopup() {
    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}
function enviarWhatsApp() {
    const mensaje = encodeURIComponent("🌴✨¡Hola! Me interesa reservar el viaje todo incluido a la playa. 🏖️🍹 ¿Podrían darme más información? 😃");
    const numeroWhatsApp = "5213321920625"; 
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
}
