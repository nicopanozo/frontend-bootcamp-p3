const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});
