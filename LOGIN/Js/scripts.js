// Mostrar / ocultar contraseña
document.addEventListener("DOMContentLoaded", () => {
  const passInput = document.getElementById("pass");
  const showBtn = document.querySelector(".show-pass");
  const form = document.getElementById("loginForm");

  if (showBtn && passInput) {
    showBtn.addEventListener("click", () => {
      if (passInput.type === "password") {
        passInput.type = "text";
        showBtn.textContent = "Ocultar";
      } else {
        passInput.type = "password";
        showBtn.textContent = "Ver";
      }
    });
  }

  // Validación y login
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tipo = document.getElementById("tipo").value.trim();
    const doc = document.getElementById("documento").value.trim();
    const pass = passInput.value;

    if (!tipo || !doc || !pass) {
      alert("⚠️ Por favor completa todos los campos.");
      return;
    }

    // Recuperar usuario guardado
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (!usuarioGuardado) {
      alert("❌ No hay usuarios registrados.");
      return;
    }

    // Validar credenciales
// Validar credenciales
    if (
      usuarioGuardado.tipo === tipo &&
      usuarioGuardado.documento === doc &&
      usuarioGuardado.contrasena === pass
    ) {
      alert(`✅ Bienvenido ${usuarioGuardado.correo}`);
      // Redirigir al inicio
      window.location.href = "Index.html";
    } else {
      alert("❌ Credenciales incorrectas.");
    }
  });
});
