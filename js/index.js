const comentariosStorage = localStorage.getItem("comentarios");
const comentarios = comentariosStorage !== null ? JSON.parse(comentariosStorage) : [];

window.onload = () => {
    const formulario = document.forms.comentar;

    cargarContenido();

    formulario.onsubmit = event => {
        event.preventDefault();
        agregarComentario(formulario.comentario.value);
    };
};

function cargarContenido() {
    if (comentarios.length > 0)
        renderizarComentarios();
}

function renderizarComentarios() {
    comentarios.forEach(c => {
        renderizarComentario(c);
    });
}

function renderizarComentario(comentario) {
    document.querySelector("div.comentarios").innerHTML += `<p>${comentario}</p>`;
}

function agregarComentario(comentario) {
    renderizarComentario(comentario);
    guardarComentario(comentario);
}

function guardarComentario(comentario) {
    comentarios.push(comentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
}