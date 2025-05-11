function calcularamor(){ 
    const name1 = document.getElementById("nombre1").value.trim();
    const name2 = document.getElementById("nombre2").value.trim();
    
    if(name1 === "" || name2 === ""){
        alert("Por favor, ingresa ambos nombres..");
        return;
    }

    const porcentajeDeAmor = Math.floor(Math.random() * 101);

    const result = document.getElementById("resultado");
    result.innerHTML = `${name1} y ${name2}  Porcentaje de amor: ${porcentajeDeAmor}%`;

    if(porcentajeDeAmor < 30){
        result.innerHTML += "<br> No es una gran coincidencia. ¡Sigue buscando!";
    } else if(porcentajeDeAmor >= 30 && porcentajeDeAmor < 70){
        result.innerHTML += "<br> Hay potencial. ¡Inténtalo!";
    } else {
        result.innerHTML += "<br> ¡Gran coincidencia! ¡El amor está en el aire!";
    }
}
