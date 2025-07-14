document.querySelectorAll('.materia').forEach(materia => {
  materia.addEventListener('click', () => {
    materia.classList.toggle('completada');
  });
});
