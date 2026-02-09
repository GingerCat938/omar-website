// Theme initialization - runs before page renders to prevent flash
(function() {
  try {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('dark-mode');
    const useDark = savedTheme === 'true' || (!savedTheme && prefersDark);
    
    if (useDark) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
    }
  } catch(e) {}
})();
