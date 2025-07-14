// Estructura de previaturas: códigoMateria: [previas]
const previas = {
  "MA403": ["MA400"],
  "MA404": ["MA400"],
  "BQ426": ["BG1"],
  "BQ428": ["MA400", "BG1", "BG031"],
  "LBT01": ["BG456"],
  "B0016": ["BG456", "BG1", "BQ426", "FI252"],
  "BG952": ["MA400", "MA403", "B0025", "BQ428"],
  "BG829": ["BG1", "BQ426", "FI252"],
  "BQ404": ["BQ426", "BG268"],
  "BG994": ["BG1", "BQ426", "BG456", "BG829", "FI252"],
  "BG986": ["BG1", "BQ426", "BG456", "BG829", "FI252"],
  "MA503": ["MA400", "MA403"],
  "BG859": ["BG829", "B0016"],
  "BG828": ["BG829", "B0016", "BG859"],
  "BG772": ["BG829", "BG268"],
  "Inmunología": ["BQ426", "B0016", "BG829"],
  // Más materias se pueden agregar acá según definas códigos únicos
};

// Función para saber si una materia está desbloqueada
function estaDesbloqueada(codigo) {
  const previasMateria = previas[codigo] || [];
  return previasMateria.every(prev => document.getElementById(`chk-${prev}`)?.checked);
}

// Refrescar estado de TODAS las materias
function actualizarMalla() {
  Object.keys(previas).forEach(codigo => {
    const div = document.getElementById(`mat-${codigo}`);
    const chk = document.getElementById(`chk-${codigo}`);

    if (estaDesbloqueada(codigo)) {
      div.classList.remove("bloqueado");
      chk.disabled = false;
    } else {
      div.classList.add("bloqueado");
      chk.disabled = true;
    }
  });
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  // Agregamos listeners a todos los checkboxes
  document.querySelectorAll("input[type=checkbox]").forEach(chk => {
    chk.addEventListener("change", actualizarMalla);
  });

  // Refrescamos estado inicial
  actualizarMalla();
});
