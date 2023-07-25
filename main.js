window.onload = iniciar;

function iniciar(){
    let buttonseguir = document.getElementById("seguir");
    buttonseguir.addEventListener("click",cambiarcolor);

    let buttonmegusta = document.getElementById("megusta");
    buttonmegusta.addEventListener("click",megusta);

    let buttoneleminar = document.getElementById("eliminar");
    buttoneleminar.addEventListener("click", eliminar);

    let buttoncomentar = document.getElementById("comentar");
    buttoncomentar.addEventListener("click",agregarComentario);
}

function agregarComentario(){
    let usuario = document.getElementById("usuario").value;
    let comentario = document.getElementById("comentario").value;
    if(usuario != "" && comentario != "") {
        let nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("micomentario");

        let nombreUsuario = document.createElement("p");
        nombreUsuario.innerHTML = "<span id='yo'>" + usuario + "</span> " + comentario;

        nuevoComentario.appendChild(nombreUsuario);
        let botonEliminar = document.createElement("button");
        botonEliminar.id = "eliminar";
        botonEliminar.textContent = "Eliminar";
        nuevoComentario.appendChild(botonEliminar);

        botonEliminar.addEventListener("click",eliminar);


        let comentar = document.querySelector(".comentar");
        let contenedorComentarios = comentar.parentElement;
        contenedorComentarios.insertBefore(nuevoComentario, comentar);

        document.getElementById("comentario").value = "";
        document.getElementById("usuario").style.border = "";
        document.getElementById("comentario").style.border = "";
    } else if(usuario == ""){
        document.getElementById("usuario").focus();
        document.getElementById("usuario").setAttribute("placeholder", "Por favor, ingresa tu usuario");
        document.getElementById("usuario").style.border = "1px solid #ff0000";
    }else{
        document.getElementById("comentario").focus();
        document.getElementById("comentario").setAttribute("placeholder", "Por favor, ingresa tu comentario");
        document.getElementById("comentario").style.border = "1px solid #ff0000";
    }

}

function eliminar(){
    let comentario = document.querySelector(".micomentario");
    comentario.remove();
}

function megusta(){
    let buttonmegusta = document.getElementById("megusta");
    let likes = document.getElementById("likes");
    if(buttonmegusta.textContent === "Me gusta"){
        buttonmegusta.textContent = "Quitar me gusta";
        buttonmegusta.style.color = "#ff0000";
        likes.textContent = "201";
    }
    else{
        buttonmegusta.textContent = "Me gusta";
        buttonmegusta.style.color = "#3b82f6";
        likes.textContent = "200";
    }
}

function cambiarcolor(){
    let buttonseguir = document.getElementById("seguir");
    if(buttonseguir.textContent == "Dejar de seguir"){
        buttonseguir.style.backgroundColor = "#3b82f6";
        buttonseguir.textContent = "Seguir";
    }else{
        buttonseguir.style.backgroundColor = "#ff0000";
        buttonseguir.textContent = "Dejar de seguir";
    }
}