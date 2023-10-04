const menu = document.getElementById("menu_icono");
const cerrarVentana = document.getElementById("menu_url");

menu.addEventListener('click', ()=>{
    cerrarVentana.classList.toggle('Rosio');
})