const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.querySelector(".title");
const canvas = document.getElementById("cat");
const ctx = canvas.getContext("2d");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");
const finalMessage = document.getElementById("finalMessage");
const noTexts = [
    "NO FEA",
    "SEGURO?",
    "PENSALO",
    "DALEEEE",
    "NO ME HAGAS ESTO"
];

let noIndex = 0;
// Tamaño del canvas
canvas.width = 240;
canvas.height = 170;


// =====================
// SIMÓN - GRIS Y BLANCO
// =====================

function drawSimon() {

    // Cabeza
    ctx.fillStyle = "#8e8e8e";
    ctx.fillRect(25, 40, 70, 60);

    // Orejas
    ctx.fillStyle = "#8e8e8e";
    ctx.fillRect(25, 25, 20, 20);
    ctx.fillRect(75, 25, 20, 20);

    // Interior de las orejas
    ctx.fillStyle = "#ffb6c1";
    ctx.fillRect(30, 30, 10, 10);
    ctx.fillRect(80, 30, 10, 10);

    // Ojos
    ctx.fillStyle = "#333";
    ctx.fillRect(42, 60, 7, 7);
    ctx.fillRect(72, 60, 7, 7);

    // Hocico blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(50, 78, 23, 15);

    // Nariz otra vez para que quede por encima
    ctx.fillStyle = "#ff9fb2";
    ctx.fillRect(58, 78, 7, 5);

    // Cuerpo
    ctx.fillStyle = "#8e8e8e";
    ctx.fillRect(35, 100, 50, 35);

    // Pechito blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(50, 100, 20, 25);

    // Patitas blancas
    ctx.fillRect(35, 130, 18, 10);
    ctx.fillRect(67, 130, 18, 10);

    // Colita
    ctx.fillStyle = "#8e8e8e";
    ctx.fillRect(82, 110, 15, 10);
    ctx.fillRect(92, 100, 10, 20);
    ctx.fillRect(97, 95, 10, 10);
}


// =====================
// MIMI - CALICO
// =====================

function drawMimi() {

    // Cabeza blanca
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(135, 40, 70, 60);

    // Oreja izquierda naranja
    ctx.fillStyle = "#d98c3f";
    ctx.fillRect(135, 25, 20, 20);

    // Oreja derecha negra
    ctx.fillStyle = "#333";
    ctx.fillRect(185, 25, 20, 20);

    // Interior de las orejas
    ctx.fillStyle = "#ffb6c1";
    ctx.fillRect(140, 30, 10, 10);
    ctx.fillRect(190, 30, 10, 10);

    // Mancha naranja de la cara
    ctx.fillStyle = "#d98c3f";
    ctx.fillRect(135, 40, 28, 35);

    // Mancha negra de la cara
    ctx.fillStyle = "#333";
    ctx.fillRect(177, 40, 28, 35);

    // Centro blanco de la cara
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(160, 55, 20, 35);

    // Ojos
    ctx.fillStyle = "#333";
    ctx.fillRect(150, 60, 7, 7);
    ctx.fillRect(185, 60, 7, 7);

    // Nariz
    ctx.fillStyle = "#ff9fb2";
    ctx.fillRect(168, 74, 7, 5);

    // Cuerpo blanco
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(145, 100, 50, 35);

    // Mancha naranja del cuerpo
    ctx.fillStyle = "#d98c3f";
    ctx.fillRect(145, 100, 18, 25);

    // Mancha negra del cuerpo
    ctx.fillStyle = "#333";
    ctx.fillRect(177, 100, 18, 25);

    // Patitas
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(145, 130, 18, 10);
    ctx.fillRect(177, 130, 18, 10);

    // Colita naranja
    ctx.fillStyle = "#d98c3f";
    ctx.fillRect(192, 110, 15, 10);
    ctx.fillRect(202, 100, 10, 20);

    // Punta negra de la cola
    ctx.fillStyle = "#333";
    ctx.fillRect(202, 95, 10, 10);
}


// =====================
// DIBUJAMOS LOS DOS
// =====================

drawSimon();
drawMimi();


// =====================
// SIMÓN Y MIMI FELICES
// =====================

function happyCats() {

    // Borramos todo el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Volvemos a dibujar a los dos
    drawSimon();
    drawMimi();


    // --- Ojitos felices de Simón ---

    ctx.fillStyle = "#8e8e8e";

    // Tapamos los ojos anteriores
    ctx.fillRect(40, 58, 12, 12);
    ctx.fillRect(70, 58, 12, 12);

    // Nuevos ojos felices
    ctx.fillStyle = "#333";
    ctx.fillRect(42, 63, 7, 3);
    ctx.fillRect(72, 63, 7, 3);


    // --- Sonrisa de Simón ---

    ctx.fillRect(55, 86, 5, 3);
    ctx.fillRect(60, 89, 5, 3);
    ctx.fillRect(65, 86, 5, 3);


    // --- Ojitos felices de Mimi ---

    // Tapamos ojo izquierdo con naranja
    ctx.fillStyle = "#d98c3f";
    ctx.fillRect(148, 58, 12, 12);

    // Tapamos ojo derecho con negro
    ctx.fillStyle = "#333";
    ctx.fillRect(183, 58, 12, 12);

    // Nuevos ojos felices
    ctx.fillStyle = "#333";
    ctx.fillRect(150, 63, 7, 3);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(185, 63, 7, 3);


    // --- Sonrisa de Mimi ---

    ctx.fillStyle = "#333";
    ctx.fillRect(163, 86, 5, 3);
    ctx.fillRect(168, 89, 5, 3);
    ctx.fillRect(173, 86, 5, 3);
};
function dodge() {
    noBtn.style.position = "absolute";

    const maxX = 220;
    const maxY = 120;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    noBtn.textContent = noTexts[noIndex];

    noIndex++;

    if (noIndex >= noTexts.length) {
        noIndex = 0;
    }
}

function rainHearts() {
    const heart = document.createElement("div");

    heart.textContent = "\u2764\uFE0F";
    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);
}

noBtn.addEventListener("mouseenter", dodge);

yesBtn.onclick = () => {
    title.textContent = "YEEEEEEEEI <3";
    message.textContent = "Yo tambien amor uwu";

    happyCats();

    buttons.style.display = "none";

    finalMessage.textContent =
        "Te amo muchisimo. Simon, Mimi y yo te elegimos siempre <3";
        finalMessage.classList.add("show");

    for (let i = 0; i < 30; i++) {
        setTimeout(rainHearts, i * 100);
    }
};
function happyCat() {
    // Borramos solamente la cara
    ctx.clearRect(70, 60, 60, 45);

    // Volvemos a pintar esa parte de rosa
    ctx.fillStyle = "#f4a6a6";
    ctx.fillRect(70, 60, 60, 45);

    // Ojitos felices
    ctx.fillStyle = "#333";
    ctx.fillRect(78, 75, 8, 4);
    ctx.fillRect(114, 75, 8, 4);

    // Nariz
    ctx.fillStyle = "#e23b4e";
    ctx.fillRect(96, 85, 8, 6);

    // Sonrisa
    ctx.fillStyle = "#333";
    ctx.fillRect(92, 96, 6, 4);
    ctx.fillRect(98, 100, 6, 4);
    ctx.fillRect(104, 96, 6, 4);
}