// Mostrar alerta cultural
function mostrarAlerta() {
  alert("Ñuqanchik kawsayta yachanchik — Aprendamos a vivir en armonía.");
}

// Cambiar idioma español/quechua
let enQuechua = false;
function cambiarIdioma() {
  const texto = document.getElementById("texto-lengua");
  if (!enQuechua) {
    texto.textContent =
      "Piruwpi aswan 40 ñawpaq simikuna kachkan. Sapa simiqa pacha yachayninta, amawtakunata, kawsayninta riqsichin.";
  } else {
    texto.textContent =
      "En el Perú existen más de 40 lenguas indígenas. Cada una encierra una visión del mundo, una sabiduría y un modo de vivir.";
  }
  enQuechua = !enQuechua;
}

// Frases de sabiduría que se actualizan
const frases = [
  "Ama sua, ama llulla, ama quella. — No robes, no mientas, no seas flojo.",
  "Llank'aymanta kawsay — Vive trabajando.",
  "Yachay kawsaymi — El saber es vida.",
  "Ama hami — No causes daño.",
  "Sumaq kawsay — Buen vivir andino."
];
let index = 0;
setInterval(() => {
  document.getElementById("frase").textContent = frases[index];
  index = (index + 1) % frases.length;
}, 7000); // cambia cada 7 segundos

// Validar y mostrar mensaje de contacto
function enviarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const confirmacion = document.getElementById("confirmacion");

  if (!nombre || !correo) {
    confirmacion.textContent = "Por favor, completa todos los campos.";
    confirmacion.style.color = "red";
    return;
  }

  if (!correo.includes("@") || !correo.includes(".")) {
    confirmacion.textContent = "Correo inválido. Intenta con otro.";
    confirmacion.style.color = "red";
    return;
  }

  confirmacion.textContent = `¡Gracias por contactarnos, ${nombre}!`;
  confirmacion.style.color = "green";
}
