window.onload = function() {
  const mensaje = document.getElementById("bienvenida");
  
  // El mensaje se eliminará después de 5 segundos
  setTimeout(() => {
    mensaje.remove();
  }, 5000);
};
