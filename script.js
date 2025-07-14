function estaDesbloqueada(materiaDiv) {
  const previas = materiaDiv.dataset.previas;
  if (!previas) return true;

  return previas.split(',').every(previa => {
    const chk = document.getElementById(`chk-${previa.trim()}`);
    return chk?.checked;
  });
}

function actualizarEstadoMaterias() {
  document.querySelectorAll('.materia').forEach(materia => {
    const nombre = materia.dataset.nombre;
    const checkbox = document.getElementById(`chk-${nombre}`);
    if (!checkbox) return;

    const desbloqueada = estaDesbloqueada(materia);
    checkbox.disabled = !desbloqueada;
    materia.classList.toggle('bloqueada', !desbloqueada);
    materia.classList.toggle('completada', checkbox.checked);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=checkbox]').forEach(chk => {
    chk.addEventListener('change', actualizarEstadoMaterias);
  });
  actualizarEstadoMaterias();
});
