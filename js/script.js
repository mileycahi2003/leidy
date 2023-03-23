//Funcion que oculta o muestra el menu
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
// Funcion que oculta el menu caundo se hace Click en un elemento
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion para darle el efecto de animacion a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("Comunicación");
        habilidades[6].classList.add("Trabajo-en-Equipo");
        habilidades[7].classList.add("Creatividad");
        habilidades[8].classList.add("Dedicación");
        habilidades[9].classList.add("Proyect-Management");
    }
}
//Detectemos el Scrolling de la pagina mediante el evento scroll
window.onscroll = function(){
    efectoHabilidades();
}