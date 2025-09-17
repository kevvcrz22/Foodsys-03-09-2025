// Validar formulario y guardar usuario
document.getElementById("formRegistro").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const confirmarCorreo = document.getElementById("confirmarCorreo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const documento = document.getElementById("documento").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  if (correo !== confirmarCorreo) {
    alert("⚠️ Los correos no coinciden.");
    return;
  }

  if (!nombre || !telefono || !documento || !correo || !contrasena) {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }

  // Guardar en localStorage
  const usuario = { nombre, telefono, documento, correo, contrasena };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
  
  // Redirigir al login
  window.location.href = "Index.html"; 
});
