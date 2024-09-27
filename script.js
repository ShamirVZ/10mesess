document.getElementById("cajaBtn").addEventListener("click", openBox);

function openBox() {
    const tapa = document.getElementById("tapa");
    // Ajustamos la rotación para que solo gire hacia arriba sin moverse tanto lateralmente
    tapa.style.transform = "rotateX(90deg) translateY(-200px)";
    
    setTimeout(() => {
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("peluche").style.transform = "translateY(-150px)";
        document.getElementById("flores").style.transform = "translateY(-150px)";
        document.getElementById("carta").style.transform = "translateY(-220px)";
        document.getElementById("peluche").style.opacity = 1;
        document.getElementById("flores").style.opacity = 1;
        document.getElementById("carta").style.opacity = 1;
    }, 1000);
}


function openLetter() {
    const modal = document.getElementById("letterModal");
    const letterContent = document.querySelector(".letter-content");
    
    modal.classList.remove("hidden");
    setTimeout(() => {
        letterContent.style.transform = "scale(1)";
    }, 100);
}

function closeLetter() {
    const modal = document.getElementById("letterModal");
    const letterContent = document.querySelector(".letter-content");
    
    letterContent.style.transform = "scale(0)";
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 500);
}
