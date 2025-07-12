// Custom cursor logic
window.addEventListener('DOMContentLoaded', function() {
  const customCursor = document.querySelector('.custom-cursor');
  if (!customCursor) return;
  document.body.style.cursor = 'none';
  customCursor.style.display = 'block';
  // Wait for image to load to get width
  function updateCursor(e) {
    const width = customCursor.offsetWidth;
    customCursor.style.left = (e.clientX - width + 1) + 'px';
    customCursor.style.top = (e.clientY) + 'px';
  }
  document.addEventListener('mousemove', updateCursor);
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      customCursor.classList.add('rotated');
    });
    link.addEventListener('mouseleave', () => {
      customCursor.classList.remove('rotated');
    });
  });
}); 