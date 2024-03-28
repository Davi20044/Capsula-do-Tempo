function openModal(serieURL) {
    var modal = document.getElementById("myModal");
    var iframe = document.getElementById("iframeContent");
    iframe.src = serieURL;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.getElementById("linkInicio").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    closeAllPopups(); // Fecha todos os pop-ups
    window.location.href = "index.html"; // Redireciona para index.html
});

function closeAllPopups() {
    // Selecione todos os elementos com a classe "popup" e os feche
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}