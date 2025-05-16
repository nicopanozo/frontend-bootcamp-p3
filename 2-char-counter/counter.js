const area = document.getElementById('area');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

area.addEventListener('input', () => {
  const text = area.value;
  const len = text.length;
  // actualiza contador de caracteres
  charCount.textContent = `Caracteres: ${len} / 200`;
  charCount.classList.toggle('red', len > 200);
  charCount.classList.toggle('green', len < 50);

  // BONUS: cuenta palabras (separa por espacios y filtra vacíos)
  const words = text.trim().split(/\s+/).filter(w => w.length);
  wordCount.textContent = `Palabras: ${words.length}`;
});
