// Sparkles follow mouse
window.addEventListener('DOMContentLoaded', function() {
  const sparkles = document.querySelector('.sparkles-effect');
  if (!sparkles) return;
  document.addEventListener('mousemove', (e) => {
    const offsetX = 20;
    const offsetY = 0;
    sparkles.style.left = (e.clientX + offsetX) + 'px';
    sparkles.style.top = (e.clientY + offsetY) + 'px';
  });
}); 